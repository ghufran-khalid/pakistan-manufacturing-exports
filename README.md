# Pakistan Manufacturing and Export Competitiveness

Pakistan Manufacturing and Export Competitiveness is an interactive data project examining the evolution of Pakistan’s manufactured exports from 2000 to 2024. It brings together evidence on export composition, concentration, revealed comparative advantage, global market share and economic complexity.

## Interactive Dashboard
Open dashboard: Explore Pakistan’s manufactured exports, export composition, concentration, revealed comparative advantage, global manufacturing-export share and economic complexity, 2000–2024.

## Related research

This project complements the broader Pakistan Industrialization research series by making the underlying trade evidence accessible for independent exploration.
[Research notes](research/README.md): Note 1, Pakistan’s Industrialisation: A Statistical Baseline; Note 2, What Does Pakistan Manufacture?; Note 3, Pakistan’s Export Structure and Industrial Competitiveness.

## Data
Harvard Growth Lab/Atlas, underlying UN Comtrade, SITC Revision 2. Constant 2024 USD uses BLS/FRED Industrial Commodities PPI. Sources, scope and approved downloads are documented in the dashboard.

## Methodology
[Definitions and caveats](dashboard/docs/methodology.md). Concentration depends on aggregation; RCA is relative specialization; constant-price values are not physical volume; supplied ECI covers a wider export basket.

## Reproducibility
Public derived datasets come from a validated research pipeline and are copied without numerical changes. This candidate includes static presentation files and selected derived data, not raw inputs or the full internal pipeline. Local test: `python -m http.server 8011 --bind 127.0.0.1`, then open http://localhost:8011/dashboard/ . See [Pages setup](GITHUB_PAGES_SETUP.md).

## License
Original dashboard code and documentation use the scoped MIT [LICENSE](LICENSE). Data and third-party software have separate [terms](THIRD_PARTY_LICENSES.md). No ownership or expanded redistribution rights over source datasets are claimed.

## Author

Ghufran Khalid is an Economics graduate from NUST, currently working as an equity research analyst and independent researcher. His research interests include industrialization, structural transformation, and living standards.

## Public-facing language

Chart takeaways, plain-English labels and keyboard-accessible explanations accompany the technical definitions. No research metrics or underlying data were changed.

## Repository description

Interactive data project on Pakistan’s manufactured exports, export structure, specialization and global competitiveness, 2000–2024.
