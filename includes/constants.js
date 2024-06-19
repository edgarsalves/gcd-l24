const projectId = dataform.projectConfig.defaultDatabase;
const projectRegion = dataform.projectConfig.defaultLocation || "EU";
const projectRegionFull = "europe-west4";

const defaultDatasetSuffix = dataform.projectConfig.schemaSuffix || "";
const projectDatasetSuffix = defaultDatasetSuffix ? `_${defaultDatasetSuffix}` : "";


const VARS = {
   PROJECT_ID: `${projectId}`,
   REGION: `${projectRegion}`,
   DATASET_SUFFIX: `${projectDatasetSuffix}`,

   //connection defined in the notebook
   LLM_CONNECTION: "llm_conn",

   LLM_MODEL_BISON: `llm${projectDatasetSuffix}.llm_model_bison`,
   LLM_MODEL_GEMINI: `llm${projectDatasetSuffix}.llm_model_gemini`,

   //https://console.cloud.google.com/storage/browser/data-analytics-golden-demo/rideshare-lakehouse-raw-bucket/rideshare_audios/v1
   GCS_URI_SOURCE_REVIEWS_AUDIOS: "gs://data-analytics-golden-demo/rideshare-lakehouse-raw-bucket/rideshare_audios/v1/*.mp3",

   //biglake table to import audios from gcs into bigquery
   TABLE_SOURCE_REVIEWS_AUDIOS: `source${projectDatasetSuffix}.reviews_audios`,

   //function to extract text from audio
   EXT_CLOUD_FUNCTION_ENDPOINT: `https://${projectRegionFull}-${projectId}.cloudfunctions.net/bigquery_external_function`,
   EXT_CLOUD_FUNCTION_AI_EXTRACT_TEXT: "extract_text_uri",
   EXT_UDF_AI_EXTRACT_TEXT: `llm${projectDatasetSuffix}.ext_udf_ai_extract_text`,
}

module.exports = { VARS }