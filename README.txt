CRYSTALFLOW — ONE-PAGE SITE FOR SITEGROUND
==========================================

Hosting this replaces
---------------------
crystalflow.com is already on SiteGround.

- Nameservers: ns1.supercp.com, ns2.supercp.com, ns3.supercp.com, ns4.supercp.com
- Control panel: SiteGround Site Tools (the old SuperCacher / SuperCP panel)
- Web server: openresty, which is what SiteGround serves
- The live site is ordinary HTML files (a 2017 Bootstrap template). It is not WordPress, not Shopify, and it does not need Node.

This folder is the same kind of site: one index.html, a css folder, a js folder, and images. No database. No build step. No PHP required.

How to upload
-------------
1. In Site Tools, open Site → File Manager.
2. Go to public_html.
3. Download a zip of the current public_html first. That is the backup.
4. Upload the CONTENTS of this folder into public_html (index.html, css/, js/, images/, favicon.svg, this README can stay or be deleted).
5. When File Manager asks, replace the existing index.html.
6. Open https://crystalflow.com/ and confirm the new page loads. Hard-refresh if an old copy is cached (SiteGround dynamic cache: Site Tools → Speed → Caching → Flush).

FTP/SFTP works the same way. The account is the SiteGround FTP user, folder public_html.

Old pages such as water-softeners.html will still be the old design until they are removed. After the new homepage is approved, those files can be deleted (they are already inside the backup). Do not delete the mail.png or other files until the backup is confirmed, and do not delete any folder SiteGround uses for email or SSL.

The quote form
--------------
The only form on the current site is “Request a Quote”.

Fields, all required:
- Name (first and last)
- Email (placeholder example@example.com)
- Phone #
- Subject
- Message
- “Please verify that you are human” — Google reCAPTCHA, site key already on the Jotform
- A hidden honeypot labelled “Should be Empty”

It posts to:
https://submit.jotform.com/submit/91956825420260

That is Crystalflow’s existing Jotform (form id 91956825420260). Submissions keep landing in the same Jotform inbox. The old page also had a wrapper form posting to /php/email.php with a “get quote” button around the Jotform embed. That PHP file is not used by this page. Leave php/email.php in place; it does no harm.

There is no Calendly, no Typeform, and no newsletter form. Buttons that said “Schedule an Appointment” linked to contact.html#appointment, and that anchor does not exist. Those buttons now go to the quote form on this page.

“Email us” in the old header was an image with no address published on the site. The phones and the quote form are the contact paths.

Phones and shop
---------------
Office  905-637-2876
Cell    905-320-4648  (call or text)
1160 King Road #39, Burlington, ON L7T 3L7

HomeStars, Facebook and Instagram links are unchanged.
