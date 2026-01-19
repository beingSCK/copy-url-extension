# Inbound Suggestions

Suggestions from outside this project's immediate context. Check during `/orient`.

**Format:** Each suggestion should include origin context (where/why it emerged) to help agents and users reason about prioritization at processing time.

---

## 2026-01-17: UX Enhancements Before Web Store Submission

### Origin & Reasoning Chain

**Where this emerged:** Session in `code-directory-top` building this extension from scratch, then testing Advanced Extension Reloader for hot-reload during development.

**The inspiration:** While configuring Advanced Extension Reloader, I noticed it has:
- An options page with configuration for extension IDs and folder paths
- Dynamic behavior based on state (whether extensions are configured or not)
- A "homebrew tech" feel but thoughtful interaction design underneath

This made me realize: even this "simple" copy-URL extension could have smarter, state-aware behavior. The Advanced Extension Reloader showed that utility extensions don't have to be one-trick ponies - they can have discoverable configuration while keeping the primary action fast.

**The leap:** If Advanced Extension Reloader can have an options interface for "what to reload," then copy-url-extension could have an interface for "what hotkey to use" - making the extension self-service for the exact problem that motivated building it (wanting a specific hotkey).

### The Suggestion

When extension icon is clicked, show a popup with:

1. **"Copy Current Tab URL"** (default action)
   - Same as hotkey behavior
   - Toast confirms copy

2. **"Change Copy-URL Hotkey"** (currently: `Cmd+Shift+U`)
   - Opens hotkey recording interface
   - User clicks field, then presses desired key combo
   - Validation with visual feedback:
     - Green: Valid, will be saved
     - Red: Invalid (conflicts with Chrome reserved keys, common OS shortcuts like Cmd+Q)
     - **Easter egg for Cmd+Shift+C**: Special message acknowledging the irony - "Chrome reserves this for Inspect Element. That's probably why you're here! Unfortunately, Chrome won't let extensions override it."

### Validation Rules for Hotkeys

- Block Chrome-reserved shortcuts (Cmd+T, Cmd+W, Cmd+Shift+C, etc.)
- Block dangerous OS shortcuts (Cmd+Q, Cmd+H)
- Warn on common app shortcuts (Cmd+S, Cmd+Z) but allow if user confirms

### Why This Suggestion Might Matter (context for prioritization)

The suggester's reasoning at time of writing - take with appropriate grain of salt:

1. **Immediate value (maybe):** Could make the extension more useful if users want custom hotkeys - but unclear if that's a real need or just the suggester's preference
2. **Strategic value (maybe):** Could serve as UX testbed before Commute Calendar - but might also be scope creep on a "keep it simple" tool
3. **Learning value (maybe):** Practicing interaction design on low-stakes projects - but time spent here is time not spent elsewhere

### Effort Estimate

Medium - requires popup HTML/CSS, storage API for saving preference, hotkey validation logic.

---

_Add new suggestions above this line._
