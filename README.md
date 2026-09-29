# Pakistan Manufacturing and Export Competitiveness

Pakistan Manufacturing and Export Competitiveness is an interactive data project examining the evolution of Pakistan’s manufactured exports from 2000 to 2024. It brings together evidence on export composition, concentration, revealed comparative advantage, global market share and economic complexity.

## Interactive Dashboard
Open dashboard: Explore Pakistan’s manufactured exports, export composition, concentration, revealed comparative advantage, global manufacturing-export share and economic complexity, 2000–2024.

## Related research

This project complements the broader Pakistan Industrialization research series by making the underlying trade evidence accessible for independent exploration.
[Research notes](research/README.md): Note 1, Pakistan’s Industrialisation: A Statistical Baseline; Note 2, What Does Pakistan Manufacture?; Note 3, Pakistan’s Export Structure and Industrial Competitiveness.

## Data
Trade data are drawn from the Harvard Growth Lab’s Atlas of Economic Complexity, based on UN Comtrade, using SITC Revision 2. Constant-price export values are expressed in 2024 US dollars using the BLS/FRED Industrial Commodities Producer Price Index. Full source definitions, scope and downloadable public datasets are documented in the dashboard.

## Methodology
The dashboard includes plain-English definitions and methodological notes for each indicator. Some measures require particular care: export concentration can change depending on how finely products are grouped; revealed comparative advantage (RCA) measures relative export specialization rather than productivity; constant-price export values are not physical export volumes; and the Economic Complexity Index (ECI) is based on a broader export basket than the manufacturing dataset used elsewhere in the dashboard.
[Read the full methodology and caveats](dashboard/docs/methodology.md)

## Reproducibility
The public datasets in this repository are derived from a validated research workflow and preserve the numerical values used in the dashboard. The repository contains the public-facing dashboard, selected derived datasets and documentation; raw source files and internal research files are not included.
To run the dashboard locally:
python -m http.server 8000
Then open:
http://localhost:8000/dashboard/
See [GitHub Pages setup](GITHUB_PAGES_SETUP.md) for deployment details.

## License
Original dashboard code and project documentation are released under the scoped MIT License. Derived data and third-party software may be subject to separate terms; see [Third-party licenses](THIRD_PARTY_LICENSES.md). No ownership or additional redistribution rights over the underlying source datasets are claimed.

## Author
Ghufran Khalid is an Economics graduate from NUST, currently working as an equity research analyst and independent researcher. His research interests include industrialization, structural transformation, and living standards.
