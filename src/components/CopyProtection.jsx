/**
 * CopyProtection.jsx
 *
 * Global copy-deterrence utility for the portfolio.
 * Mounts once at the app root and attaches document-level event
 * listeners that block casual copying, right-click, and dev-tool
 * shortcuts while preserving accessibility, keyboard navigation,
 * links, buttons, forms, and scrolling.
 *
 * LIMITATIONS (by design — see bottom of file):
 * These are deterrence measures, not DRM. A determined user can
 * still bypass them via browser extensions, the terminal, or by
 * disabling JavaScript. The goal is to raise the effort bar for
 * casual copy-paste, not to make it impossible.
 */

import { useEffect } from 'react';

/* ──────────────────────────────────────────────────────────────
   Blocked keyboard shortcuts
   Key values are lowercase for case-insensitive matching.
   ────────────────────────────────────────────────────────────── */
const BLOCKED_KEYS = new Set([
  'c', // Copy
  'x', // Cut
  'a', // Select All
  's', // Save
  'u', // View Source
]);

/**
 * Returns true when the active element is an editable control
 * (input, textarea, contentEditable) where copy/cut/select-all
 * must continue to work normally.
 */
function isEditableTarget(target) {
  if (!target || typeof target.closest !== 'function') return false;
  return Boolean(target.closest('input, textarea, pre, code, [contenteditable="true"]'));
}

/**
 * CopyProtection — render-less component.
 * Mount it once inside <App /> (or alongside it).
 * It returns null and produces no DOM output.
 */
export default function CopyProtection() {
  useEffect(() => {

    /* ── 1. Disable right-click context menu ────────────────── */
    const onContextMenu = (e) => {
      e.preventDefault();
    };

    /* ── 2. Block copy-related keyboard shortcuts ───────────── */
    const onKeyDown = (e) => {
      // F12 — DevTools toggle
      if (e.key === 'F12') {
        e.preventDefault();
        return;
      }

      // Ctrl / Cmd modifier shortcuts (C, X, A, S, U)
      if ((e.ctrlKey || e.metaKey) && BLOCKED_KEYS.has(e.key.toLowerCase())) {
        // Allow normal behavior inside editable fields so forms
        // and text inputs remain fully functional.
        if (isEditableTarget(e.target)) return;

        e.preventDefault();
      }
    };

    /* ── 3. Block copy and cut clipboard events ─────────────── */
    const onCopy = (e) => {
      if (isEditableTarget(e.target)) return;
      e.preventDefault();
    };

    const onCut = (e) => {
      if (isEditableTarget(e.target)) return;
      e.preventDefault();
    };

    /* ── 4. Prevent image dragging globally ─────────────────── */
    const onDragStart = (e) => {
      if (e.target.tagName === 'IMG') {
        e.preventDefault();
      }
    };

    /* ── 5. Mark all current and future images as non-draggable.
       Uses a MutationObserver so images added dynamically
       (e.g. gallery screenshots loaded later) are also covered. */
    const disableImageDrag = (img) => {
      img.setAttribute('draggable', 'false');
    };

    // Process images already in the DOM
    document.querySelectorAll('img').forEach(disableImageDrag);

    // Watch for images added later
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
          if (node.nodeType !== 1) continue; // element nodes only
          if (node.tagName === 'IMG') disableImageDrag(node);
          // Also check children of added subtrees
          if (node.querySelectorAll) {
            node.querySelectorAll('img').forEach(disableImageDrag);
          }
        }
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });

    /* ── Attach listeners ───────────────────────────────────── */
    document.addEventListener('contextmenu', onContextMenu);
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('copy', onCopy);
    document.addEventListener('cut', onCut);
    document.addEventListener('dragstart', onDragStart);

    /* ── Cleanup on unmount ──────────────────────────────────── */
    return () => {
      document.removeEventListener('contextmenu', onContextMenu);
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('copy', onCopy);
      document.removeEventListener('cut', onCut);
      document.removeEventListener('dragstart', onDragStart);
      observer.disconnect();
    };
  }, []);

  // Render-less component — no DOM output
  return null;
}
