# Pakistan Manufacturing and Export Competitiveness

A standalone interactive data project exploring Pakistan’s manufactured exports, 2000–2024. It complements the Pakistan Industrialization research series.

Static HTML/CSS/JavaScript with pinned local Plotly 4.1.1. Six sections cover overview, export structure, concentration, industry RCA, global competitiveness, and methodology. Five overview KPIs and eight charts use validated 2000–2024 outputs. Product explorers and technology charts are not included.

Serve this directory with `python -m http.server 8010 --bind 127.0.0.1` and open http://localhost:8010. Use a modern browser with JavaScript, ES modules, fetch and ResizeObserver. Opening index.html as a file is unsupported. No backend, build service, accounts, cookies or tracking are required.

All paths are relative and work under a GitHub Pages project subdirectory. Configuration is in `data/dashboard_config.json`; the manifest lists every public data payload. Approved CSV downloads are listed separately in `data/download_manifest.json`. The manifest itself is the catalogue and is not its own data entry. No runtime reference points outside this directory except institutional source links.

See [methodology](docs/methodology.md), [sources](docs/sources.md), [dictionary](docs/data_dictionary.md), and [third-party terms](THIRD_PARTY_LICENSES.md). Growth Lab/Atlas supplies trade and ECI; BLS/FRED supports constant-price values. Research values are copied, never recalculated by this frontend. Configuration disables omitted features; enabling those flags alone cannot restore assets omitted from the build.

This is an unpublished release candidate. Deployment requires explicit human authorization.

## Author

Ghufran Khalid is an Economics graduate from NUST, currently working as an equity research analyst and independent researcher. His research interests include industrialization, structural transformation, and living standards.

## Public-facing language

Chart takeaways, plain-English labels and keyboard-accessible explanations accompany the technical definitions. No research metrics or underlying data were changed.
