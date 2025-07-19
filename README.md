Task Overview
A SaaS dashboard aims to provide seamless multi-language support, allowing users to switch instantly between English and Spanish. The language setting should update content immediately and persist across sessions for a consistent experience after reloads. Accessibility for the language switcher is required so all users can interact with it effectively.

Guidance
- Focus on ensuring user-selected language is reflected immediately throughout the dashboard UI.
- Store the user's chosen language so it persists between sessions and browser reloads.
- Implement the solution using React functional components, hooks, and context.
- Ensure the language switcher dropdown meets accessibility standards, including keyboard navigation and ARIA attributes.
- Only English and Spanish need to be supported at this point.

Objectives
- Provide a language switching mechanism that allows toggling between English and Spanish at any time.
- Ensure language changes are reflected instantly and also after a browser reload (preference is persistent).
- Make sure the language switcher component is fully accessible, including for keyboard users.
- Confirm that all visible dashboard text is translated according to the selected language.

How to Verify
- Select a language using the switcher and observe all dashboard content change immediately.
- Refresh the page; confirm that the previously selected language is restored and all UI remains translated accordingly.
- Test keyboard navigation and screen reader accessibility for the language dropdown.
- Ensure only English and Spanish are selectable, with correct language labels and visual feedback on selection.
