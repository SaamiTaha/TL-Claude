<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the Taha Landscaping Next.js App Router project. PostHog was already installed and initialized via `app/providers.tsx` (with pageview and pageleave tracking). This integration adds 10 custom business events across 7 files, covering the full conversion journey from service discovery through to quote submission.

**New files created:**
- `components/sections/GalleryTabs.tsx` — client component wrapping gallery filter tabs with `gallery_category_selected` tracking
- `components/tracking/ServicePageTracker.tsx` — lightweight client component for `service_page_viewed` on service pages

**Modified files:**
- `components/sections/ContactForm.tsx` — quote conversion + error tracking + user identification
- `components/layout/Navbar.tsx` — phone call click tracking (desktop + mobile)
- `components/sections/FullYardCTA.tsx` — converted to client component; CTA click + phone call tracking
- `components/sections/GalleryGrid.tsx` — gallery lightbox open tracking
- `components/sections/FAQ.tsx` — FAQ expansion tracking
- `app/gallery/page.tsx` — updated to use `GalleryTabs` client component
- `app/services/[service]/page.tsx` — added `ServicePageTracker`

| Event | Description | File |
|---|---|---|
| `quote_requested` | User successfully submitted the consultation form (Supabase insert succeeded). Core conversion event. Also calls `posthog.identify()` with the user's email. | `components/sections/ContactForm.tsx` |
| `quote_form_error` | Contact form Supabase insert failed. Includes `error_message`, `service`, and `source_page`. | `components/sections/ContactForm.tsx` |
| `phone_call_clicked` | User clicked the phone number in the desktop navbar. Source: `navbar`. | `components/layout/Navbar.tsx` |
| `phone_call_clicked` | User clicked the phone number in the mobile nav overlay. Source: `navbar_mobile`. | `components/layout/Navbar.tsx` |
| `phone_call_clicked` | User clicked Call Now in the FullYardCTA section. Includes `source` and `variant` properties. | `components/sections/FullYardCTA.tsx` |
| `full_yard_cta_clicked` | User clicked the primary CTA in the Full Yard section. Includes `variant` (`full` or `compact`). | `components/sections/FullYardCTA.tsx` |
| `gallery_image_opened` | User clicked a gallery image to open the lightbox. Includes `category` and `image_src`. | `components/sections/GalleryGrid.tsx` |
| `gallery_category_selected` | User clicked a gallery filter tab. Includes `category` and `label`. | `components/sections/GalleryTabs.tsx` |
| `faq_question_expanded` | User expanded an FAQ item. Includes `question` text and `question_index`. Only fires on open, not close. | `components/sections/FAQ.tsx` |
| `service_page_viewed` | User landed on a service detail page. Includes `service` slug and `category`. Top of the service conversion funnel. | `components/tracking/ServicePageTracker.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- [Analytics basics dashboard](/dashboard/1594322)
- [Quote Requests Over Time](/insights/NXHeVOsy) — daily trend of your primary conversion event
- [Quote Form Errors](/insights/2UHcRAJe) — monitor submission failures to catch technical issues
- [Service Page to Quote Funnel](/insights/FAVM2dEg) — conversion funnel from service page view to quote request
- [Phone Call Clicks by Source](/insights/YRDW9sIs) — phone intent broken down by where users click (navbar, CTA, etc.)
- [Gallery & CTA Engagement](/insights/sKr6hqNa) — gallery opens, category filters, and Full Yard CTA clicks over time

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
