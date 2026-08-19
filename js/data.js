// ============================================================================
// TODO: SAMPLE / PLACEHOLDER DATA
// ----------------------------------------------------------------------------
// The original page loaded this data from an internal path
// (../../../NPO/nervosensus/js/data.js) that only exists inside a private
// project and is not published to GitHub Pages. This file is a stand-in so
// the page has something to render (stats, sources table, term counts) when
// viewed standalone.
//
// Replace DEFAULT_CELL_TYPES / DEFAULT_GENES / DEFAULT_SOURCES below with
// your real dataset before treating this as the live site. Keep the same
// field names (species, somaLocation(s), axonSensoryTermination,
// axonTerminalLocation, projectionTarget, sourceNomenclatureLabel, label,
// doi) since index.html reads them directly — or update the script in
// index.html to match whatever shape your real data uses.
// ============================================================================

var DEFAULT_SOURCES = [
  { label: "Zheng et al. 2019 (DRG)", doi: "10.1016/j.cell.2019.05.006" },
  { label: "Kupari et al. 2021 (DRG)", doi: "10.1038/s41467-021-21725-z" },
  { label: "Nguyen et al. 2017 (Mouse)", doi: "10.7554/eLife.24354" }
  // TODO: add remaining published sources here
];

var DEFAULT_GENES = [
  { symbol: "SCGN" },
  { symbol: "ADRA2C" },
  { symbol: "TRPV1" },
  { symbol: "PIEZO2" }
  // TODO: add remaining marker genes here
];

var DEFAULT_CELL_TYPES = [
  {
    label: "DRG Aδ HTMR",
    species: "Human",
    sourceNomenclatureLabel: "Zheng et al. 2019 (DRG)",
    somaLocation: "Dorsal root ganglion",
    axonSensoryTermination: "Skin, epidermis",
    projectionTarget: "Spinal cord dorsal horn"
  },
  {
    label: "DRG C-LTMR",
    species: "Human",
    sourceNomenclatureLabel: "Zheng et al. 2019 (DRG)",
    somaLocation: "Dorsal root ganglion",
    axonSensoryTermination: "Hairy skin",
    projectionTarget: "Spinal cord dorsal horn"
  },
  {
    label: "Peptidergic nociceptor",
    species: "Mouse",
    sourceNomenclatureLabel: "Kupari et al. 2021 (DRG)",
    somaLocations: ["Dorsal root ganglion", "Trigeminal ganglion"],
    axonTerminalLocation: "Superficial dorsal horn"
  },
  {
    label: "Non-peptidergic nociceptor",
    species: "Mouse",
    sourceNomenclatureLabel: "Nguyen et al. 2017 (Mouse)",
    somaLocation: "Dorsal root ganglion",
    axonSensoryTermination: "Epidermis"
  }
  // TODO: add remaining cell type records here
];
