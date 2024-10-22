// Placeholder functions for feature actions
function startGHGVisualization() {
    setModelVisibility('ghgModel', true);
    hideOtherModels(['fossilFuelModel', 'methaneModel', 'carbonBudgetModel', 'ghgSourcesSinksModel', 'lateralFluxesModel', 'climateScenariosModel', 'climateSolutionsModel']);
    alert("Starting GHG AR Visualization...");
}

function simulateFossilFuelEmissions() {
    setModelVisibility('fossilFuelModel', true);
    hideOtherModels(['ghgModel', 'methaneModel', 'carbonBudgetModel', 'ghgSourcesSinksModel', 'lateralFluxesModel', 'climateScenariosModel', 'climateSolutionsModel']);
    alert("Simulating Fossil Fuel Emissions...");
}

function exploreMethaneEmissions() {
    setModelVisibility('methaneModel', true);
    hideOtherModels(['ghgModel', 'fossilFuelModel', 'carbonBudgetModel', 'ghgSourcesSinksModel', 'lateralFluxesModel', 'climateScenariosModel', 'climateSolutionsModel']);
    alert("Exploring Methane Emissions...");
}

function viewCarbonBudget() {
    setModelVisibility('carbonBudgetModel', true);
    hideOtherModels(['ghgModel', 'fossilFuelModel', 'methaneModel', 'ghgSourcesSinksModel', 'lateralFluxesModel', 'climateScenariosModel', 'climateSolutionsModel']);
    alert("Viewing Carbon Budget...");
}

function exploreGHGSourcesSinks() {
    setModelVisibility('ghgSourcesSinksModel', true);
    hideOtherModels(['ghgModel', 'fossilFuelModel', 'methaneModel', 'carbonBudgetModel', 'lateralFluxesModel', 'climateScenariosModel', 'climateSolutionsModel']);
    alert("Exploring GHG Sources & Sinks...");
}

function viewCarbonMovement() {
    setModelVisibility('lateralFluxesModel', true);
    hideOtherModels(['ghgModel', 'fossilFuelModel', 'methaneModel', 'carbonBudgetModel', 'ghgSourcesSinksModel', 'climateScenariosModel', 'climateSolutionsModel']);
    alert("Viewing Carbon Movement...");
}

function exploreClimateScenarios() {
    setModelVisibility('climateScenariosModel', true);
    hideOtherModels(['ghgModel', 'fossilFuelModel', 'methaneModel', 'carbonBudgetModel', 'ghgSourcesSinksModel', 'lateralFluxesModel', 'climateSolutionsModel']);
    alert("Exploring Climate Scenarios...");
}

function viewClimateSolutions() {
    setModelVisibility('climateSolutionsModel', true);
    hideOtherModels(['ghgModel', 'fossilFuelModel', 'methaneModel', 'carbonBudgetModel', 'ghgSourcesSinksModel', 'lateralFluxesModel', 'climateScenariosModel']);
    alert("Viewing Climate Solutions...");
}

// Initialize AR scene
function initializeAR() {
    document.getElementById('ar-scene').style.display = 'block'; // Show AR scene
    alert("AR initialized. Point your camera at the Hiro marker to view the AR model!");
}

// Helper function to set model visibility
function setModelVisibility(modelId, visible) {
    document.getElementById(modelId).setAttribute('visible', visible);
}

// Helper function to hide other AR models
function hideOtherModels(models) {
    models.forEach(modelId => {
        setModelVisibility(modelId, false);
    });
}

