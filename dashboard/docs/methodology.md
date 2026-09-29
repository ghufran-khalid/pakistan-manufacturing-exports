# Methodology

## Coverage and product groups
The dashboard covers Pakistan’s goods exports in calendar years 2000–2024. Trade values come from Harvard Growth Lab/Atlas, using UN Comtrade and Growth Lab’s documented reconciliation. SITC is an international system for grouping traded products; this project uses Revision 2 and its verified hierarchy.

Manufacturing covers SITC Sections 5–8 excluding Division 68 (non-ferrous metals). Valid “not elsewhere specified” products remain included. Explicit zero records stay zero; missing records remain missing. The project does not create a balanced panel by adding missing product observations.

## Comparing values across years
Values in constant 2024 US dollars adjust for broad price changes, using the BLS Industrial Commodities Producer Price Index from FRED (PPIIDC). The annual price index is the arithmetic mean of 12 monthly observations. Constant-price value = current-dollar value × (2024 price index / that year’s price index). This improves comparability across years but does not measure physical export volume. The equal-month average is a transparent implementation, not verified Atlas internal code. The dashboard displays the previously validated series.

## Concentration
CR5 is the share of manufactured exports accounted for by the five largest detailed products in each year. CR10 uses the ten largest. The products are ranked separately in every year; membership can change.

The export concentration index (HHI) is the sum of squared product shares expressed as decimals. Higher values mean more concentration; a lower value is not automatically economically better. Detailed products (SITC4) are the main measure; broader groups (SITC3) provide a comparison. Their 2000–2024 directions differ, so the result depends partly on product detail. No antitrust thresholds are applied. The equivalent number of equally sized export products, where used in the research data, is the previously calculated inverse of HHI.

## Revealed comparative advantage
Balassa RCA = (Pakistan product exports / Pakistan total goods exports) / (world product exports / world total goods exports). World totals use supplied Growth Lab world-product sums. A value above 1 means Pakistan exports that product more intensively than the world average. RCA describes observed trade specialization, not productivity, technological capability or a causal advantage.

The comparisons use averages for 2000–2002 and 2022–2024, based on available annual observations. Missing averages are not zero. Research materiality requires late mean RCA >1 and late mean manufacturing share >=0.5%. Product transition-share means are not rescaled to 100%. Technology-classification data and product explorers are not included in this public release.

## Global share and economic complexity
Pakistan’s share of global manufactured exports divides Pakistan’s manufactured exports by supplied world manufactured exports under the same manufacturing definition.

The Economic Complexity Index (ECI) summarizes export diversity and how widely those products are exported by other countries. Higher values indicate a more complex export basket. ECI and rank are supplied Growth Lab SITC measures for the wider export basket, not manufacturing-only indicators or an independent recalculation. They are not direct measures of technology or productivity. Country coverage and source version matter for rank comparisons.

## Comparisons and presentation
External validation does not replace project values. World Bank manufactures metadata uses SITC Revision 3, so definition and data-version differences remain. PBS fiscal-year totals provide context; they are not compared one-to-one with calendar-year totals. The small ANS geographic discrepancy remains documented in the dashboard’s caveats.

For display, frozen broad-product shares (SITC2) were combined using the unchanged candidate mapping. Textiles (65) and apparel (84) remain separate. Official broad groups remain available. Filtering the legend does not rescale shares. Takeaways describe the stated study-period comparison, not a newly calculated conclusion for each filter selection. No research metric or source data was changed for this language refinement.
