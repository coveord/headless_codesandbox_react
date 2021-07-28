import {
  buildSearchEngine,
  getSampleSearchEngineConfiguration,
} from "@coveo/headless";

export async function initializeHeadlessEngine() {
  return buildSearchEngine({
    configuration: getSampleSearchEngineConfiguration(),
  });
}
