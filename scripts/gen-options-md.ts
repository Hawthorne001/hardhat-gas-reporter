import  table from "markdown-table";

function generate() {
  const tableOptions = { align: ['l','c','c','l']};
  const md = table(optionsTable, tableOptions);
  console.log(md);
}

const title = [
  "Options",
  "Type",
  "Default",
  "Description"
]

const outputSubtitle = [
  ":floppy_disk:   **OUTPUT**", "", "", ""
];

const displaySubtitle = [
  ":high_brightness:   **DISPLAY**", "", "", ""
];

const advancedSubtitle = [
  ":mag:    **LOW-LEVEL CONFIG**", "", "", ""
];

const optionsTable = [
title,
// currency
[
  "currency",
  "_string_",
  "`USD`",
  "National currency to represent gas costs in. Exchange rates are loaded at runtime from the " +
  "`coinmarketcap` api. Available currency codes can be found [here][5]"
],
// coinmarketcap
[
  "coinmarketcap",
  "_string_",
  "-",
  "[API key][3] to use when fetching live token price data"
],
// enabled
[
  "enabled",
  "_bool_",
  "`true`",
  "Produce gas reports with `hardhat test`"
],
// excludeAutoGeneratedGetters
[
  "excludeAutoGeneratedGetters",
  "_bool_",
  "`false`",
  "Exclude solc generated public state vars when reporting gas for pure and view methods. " +
  "(Incurs a performance penalty on test startup when `true`) ⚠️ SLOW ⚠️"
],
// excludeContracts
[
  "excludeContracts",
  "_string[]_",
  "`[]`",
  "Names of contracts to exclude from report. Ex: `[\"MyContract\"]`"
],
// includeIntrinsicGas
[
  "includeIntrinsicGas",
  "_bool_",
  "`true`",
  "Include standard 21_000 + calldata bytes overhead in method gas usage data. (Setting to `false` " +
  "can be useful for modelling contract infra that will never be called by an EOA)"
],
// L1
[
  "L1",
  "_string_",
  "`ethereum`",
  "Auto-configure reporter to emulate an L1 network.  (See [supported networks][6])"
],
// L2
[
  "L2",
  "_string_",
  "-",
  "Auto-configure reporter to emulate an L2 network (See [supported networks][6])"
],
// L1Etherscan
[
  "L1Etherscan",
  "_string_",
  "-",
  "[API key][4] to use when fetching live gasPrice, baseFee, and blobBaseFee data " +
  "from an L1 network. (Optional, see [Supported Networks][6])"
],
// L1Etherscan
[
  "L2Etherscan",
  "_string_",
  "-",
  "[API key][4] to use when fetching live gasPrice data from an L2 network " +
  "(Optional, see [Supported Networks][6])"
],
// offline
[
  "offline",
  "_bool_",
  "`false`",
  "Turn off remote calls to fetch data"
],
// optimismHardfork
[
  "optimismHardfork",
  "_string_",
  "`ecotone`",
  "Optimism hardfork to emulate L1 & L2 gas costs for."
],
// proxyResolver
[
  "proxyResolver",
  "_Class_",
  "-",
  "User-defined class which helps reporter identify contract targets of proxied calls. " +
  "(See [Advanced Usage][7])"
],
// remoteContracts
[
  "remoteContracts",
  "_Array_",
  "-",
  "List of forked-network deployed contracts to track execution costs for." +
  "(See [Advanced Usage][8])"
],
// reportPureAndViewMethods
[
  "reportPureAndViewMethods",
  "_bool_",
  "`false`",
  "Track gas usage for methods invoked via `eth_call`. (Incurs a performance penalty that can be " +
  "significant for large test suites)"
],
displaySubtitle,
// currencyDisplayPrecision
[
  "currencyDisplayPrecision",
  "_number_",
  "`2`",
  "Decimal precision to show nation state currency costs in"
],
// darkMode
[
  "darkMode",
  "_bool_",
  "`false`",
  "Use colors better for dark backgrounds when printing to stdout"
],
// forceTerminalOutput
[
  "forceTerminalOutput",
  "_bool_",
  "`false`",
  "Write to terminal even when saving output to file"
],
// forceTerminalOutputFormat
[
  "forceTerminalOutputFormat",
  "_string_",
  "-",
  "Table format to output forced terminal output in (\"legacy\" / \"terminal\" / \"markdown\")"
],
// noColor
[
  "noColors",
  "_bool_",
  "`false`",
  "Omit terminal color in output"
],
// reportFormat
[
  "reportFormat",
  "_string_",
  "`terminal`",
  "Report formats (\"legacy\" / \"terminal\" / \"markdown\")"
],
// showMethodSig
[
  "showMethodSig",
  "_bool_",
  "`false`",
  "Display the complete function signature of methods. (Useful if you have overloaded methods)"
],
// showUncalledMethods
[
  "showUncalledMethods",
  "_bool_",
  "`false`",
  "List all methods and deployments, even if no transactions were recorded for them"
],
// suppressTerminalOutput
[
  "suppressTerminalOutput",
  "_bool_",
  "`false`",
  "Skip writing the table to stdout. (Useful if you only want to write JSON to file)"
],
outputSubtitle,
// outputFile
[
  "includeBytecodeInJSON",
  "_bool_",
  "false",
  "Include bytecode and deployedBytecode blobs in JSON output"
],
// outputFile
[
  "outputFile",
  "_string_",
  "-",
  "Relative path to a file to output text table to (instead of stdout)"
],
// outputJSONFile
[
  "outputJSONFile",
  "_string_",
  "-",
  "Relative path to a file to output gas data in JSON format to. (See [Advanced Usage][9])"
],
// outputJSON
[
  "outputJSON",
  "_bool_",
  "`false`",
  "Write options, methods, deployment data in JSON format to file. (See [Advanced Usage][9])"
],
// rst
[
  "rst",
  "_bool_",
  "`false`",
  "Output with a reStructured text code-block directive. (Useful if you want to include report in " +
  "ReadTheDocs or Sphinx docs)"
],
// rstTitle
[
  "rstTitle",
  "_string_",
  "-",
  "Title for reStructured text header"
],
advancedSubtitle,
// gasPrice
[
  "gasPrice",
  "_number_",
  "-",
  "Gwei price per gas unit (Ex: `25`). " +
  "By default, this is fetched from live network when `coinmarketcap` option is defined"
],
// baseFee
[
  "baseFee",
  "_number_",
  "-",
  "Gwei base fee per gas unit used to calculate L1 calldata costs for L2 transactions (Ex: `25`). " +
  "By default, this is fetched from live network when `L2` & `coinmarketcap` options are defined"
],
// blobBaseFee
[
  "blobBaseFee",
  "_number_",
  "-",
  "Gwei blob base fee per gas unit used to calculate post-EIP-7516 L1 calldata costs for L2 transactions " +
  "(Ex: `25`). By default, this is fetched from live network when `L2` & `coinmarketcap` options are defined"
],
// blobBaseFeeApi
[
  "blobBaseFeeApi",
  "_string_",
  "-",
  "URL to fetch live *execution* network blob base fee from. (By default, this is auto-configured " +
  "based on the `L1` or `L2` setting)"
],
// gasPriceApi
[
  "gasPriceApi",
  "_string_",
  "-",
  "URL to fetch live *execution* network gas price from. (By default, this is auto-configured " +
  "based on the `L1` or `L2` setting)"
],
// getBlockApi
[
  "getBlockApi",
  "_string_",
  "-",
  "URL to fetch L1 block header from when simulating L2. (By default, this is auto-configured " +
  "based on the `L2` setting)"
],
// opStackBaseFeeScalar
[
  "opStackBaseFeeScalar",
  "_number_",
  "-",
  "Scalar applied to L1 base fee when calculating L1 data cost (see [Advanced Usage][12])"
],
// opStackBlobBaseFeeScalar
[
  "opStackBlobBaseFeeScalar",
  "_number_",
  "-",
  "Scalar applied to L1 blob base fee when calculating L1 data cost (see [Advanced Usage][12])"
],
// token
[
  "token",
  "_string_",
  "-",
  "Network token gas fees are denominated in (ex:\"ETH\"). (By default, this is auto-configured " +
  "based on the `L1` or `L2` setting)"
],
// tokenPrice
[
  "tokenPrice",
  "_string_",
  "-",
  "Network token price per nation state currency unit. (To denominate costs *in network token* " +
  "set this to `\"1\"`)"
]];

// Run
generate();
