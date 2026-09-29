# Public data dictionary

## Reading the dashboard

“Detailed product” means a four-digit SITC product (SITC4). “Broad product group” means a two-digit division (SITC2); the three-digit groups (SITC3) used for concentration sit between these levels. SITC is the international trade classification, Revision 2 here. Friendly screen labels do not rename the data fields below. CR5/CR10 are shares from the top 5/10 products; HHI is the export concentration index; RCA is revealed comparative advantage; ECI is the Economic Complexity Index. A percentage-point change subtracts two percentages, rather than expressing their relative percentage change.


Codes remain text; null is missing, not zero. Percentages are on 0–100 scale, HHI on 0–1, RCA dimensionless and ECI in index points. Currency fields specify current or constant 2024 USD; indices are 2000=100. Do not sum annual ratios.

## export_orientation

Export orientation. Rows: 25; columns: 8. File: [export_orientation.json](../data/json/export_orientation.json).

Grain: year. Fields: `year`, `manufactured_exports_constant_2024_usd`, `total_merchandise_exports_constant_2024_usd`, `manufactured_export_share_pct`, `manufactured_export_real_growth_pct`, `total_export_real_growth_pct`, `manufactured_export_real_index_2000_100`, `total_export_real_index_2000_100`.

## export_concentration

Export concentration. Rows: 25; columns: 9. File: [export_concentration.json](../data/json/export_concentration.json).

Grain: year. Fields: `year`, `cr5_pct`, `cr10_pct`, `hhi_sitc4`, `hhi_sitc3`, `effective_number_products`, `positive_export_product_count`, `products_ge_0_5pct_count`, `products_ge_1pct_count`.

## composition_display_groups

Composition display groups. Rows: 200; columns: 4. File: [composition_display_groups.json](../data/json/composition_display_groups.json).

Grain: year × display_group. Fields: `year`, `display_group`, `export_share_pct`, `display_order`.

## sitc2_composition

Sitc2 composition. Rows: 850; columns: 5. File: [sitc2_composition.json](../data/json/sitc2_composition.json).

Grain: year × sitc2. Fields: `year`, `sitc2`, `sitc2_export_current_usd`, `sitc2_manufacturing_export_share_pct`, `sitc2_rank`.

## sitc2

Sitc2. Rows: 69; columns: 4. File: [sitc2.json](../data/lookups/sitc2.json).

Grain: sitc2. Fields: `sitc2`, `sitc2_name`, `sitc1`, `sitc1_name`.

## rca_sitc2_periods

Rca sitc2 periods. Rows: 34; columns: 6. File: [rca_sitc2_periods.json](../data/json/rca_sitc2_periods.json).

Grain: sitc2. Fields: `sitc2`, `early_rca_mean`, `late_rca_mean`, `rca_change`, `early_manufacturing_export_share_mean_pct`, `late_manufacturing_export_share_mean_pct`.

## sitc2_world_market_share

Sitc2 world market share. Rows: 850; columns: 5. File: [sitc2_world_market_share.json](../data/json/sitc2_world_market_share.json).

Grain: year × sitc2. Fields: `year`, `sitc2`, `pakistan_exports_current_usd`, `world_exports_current_usd`, `pakistan_world_market_share_pct`.

## rca_sitc2

Rca sitc2. Rows: 850; columns: 5. File: [rca_sitc2.json](../data/json/rca_sitc2.json).

Grain: year × sitc2. Fields: `year`, `sitc2`, `rca_sitc2`, `manufacturing_export_share_pct`, `pakistan_sitc2_exports_usd`.

## world_market_share

World market share. Rows: 25; columns: 5. File: [world_market_share.json](../data/json/world_market_share.json).

Grain: year. Fields: `year`, `pakistan_manufactured_exports_current_usd`, `world_manufactured_exports_current_usd`, `pakistan_world_manufacturing_export_share_pct`, `pakistan_world_manufacturing_share_index_2000_100`.

## eci

Eci. Rows: 25; columns: 3. File: [eci.json](../data/json/eci.json).

Grain: year. Fields: `year`, `eci`, `eci_rank`.

## product_exports

Product exports. Rows: 12845; columns: 7. File: [product_exports.csv](../data/downloads/product_exports.csv).

Grain: year × sitc4. Fields: `year`, `sitc4`, `export_value_current_usd`, `manufacturing_export_share_pct`, `annual_rank`, `top5_flag`, `top10_flag`.

## rca_products

Rca products. Rows: 12845; columns: 6. File: [rca_products.csv](../data/downloads/rca_products.csv).

Grain: year × sitc4. Fields: `year`, `sitc4`, `rca`, `rca_gt_1_flag`, `manufacturing_export_share_pct`, `pakistan_product_exports_usd`.

## rca_transitions

Rca transitions. Rows: 516; columns: 10. File: [rca_transitions.csv](../data/downloads/rca_transitions.csv).

Grain: sitc4. Fields: `sitc4`, `early_rca_mean`, `late_rca_mean`, `rca_change`, `early_manufacturing_export_share_mean_pct`, `late_manufacturing_export_share_mean_pct`, `manufacturing_export_share_change_pp`, `rca_transition_category`, `late_material_rca_flag`, `late_material_rca_1pct_flag`.

## sources

Sources. Rows: 6; columns: 8. File: [sources.csv](../data/downloads/sources.csv).

Grain: source_id. Fields: `source_id`, `source_name`, `dataset_name`, `source_url`, `classification`, `years_available`, `unit`, `notes`.

## dashboard_config

Public presentation configuration. Rows: 1; columns: 17. File: [dashboard_config.json](../data/dashboard_config.json).

## download_manifest

Public presentation configuration. Rows: 8; columns: 5. File: [download_manifest.json](../data/download_manifest.json).

## public_caveats

Public source/methodology documentation. Rows: 12; columns: 7. File: [public_caveats.json](../data/lookups/public_caveats.json).

## public_sources

Public source/methodology documentation. Rows: 5; columns: 4. File: [public_sources.json](../data/lookups/public_sources.json).
