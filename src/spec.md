# Specification

## Summary
**Goal:** Update Skyra’s top navigation branding and refresh hero/application imagery with metro/buildings/facades/furniture photos.

**Planned changes:**
- Update the top-left navbar brand area to display the text “Skyra” and remove the logo image, while keeping the click-to-scroll-to-top behavior.
- Replace the hero section background overlay image with a new outdoor metro station photo featuring visible tiles.
- Update the Applications section card images so “Metro & Railway Stations” uses the new outdoor metro station tiles photo, and “Public Buildings”, “Walls & Facades”, and “Urban Furniture” each use distinct new photos.
- Add the new generated images under `frontend/public/assets/generated` and reference them directly via `/assets/generated/...` paths from the React components.

**User-visible outcome:** The site header shows “Skyra” text (no logo image), and the hero plus application cards display updated, distinct metro/buildings/facades/furniture photos.
