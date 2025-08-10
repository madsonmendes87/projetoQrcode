import chalk from "chalk";


const promptSchemaQRCode = [
  {
    name: "link",
    default: "00020126580014BR.GOV.BCB.PIX013699e8fabf-fdd0-4944-9e0a-226f76ce977d5204000053039865802BR5919Madson Silva Mendes6009SAO PAULO62140510wgWimwS0PK6304B58D",
    hidden: true
  },
  {
    name: "type",
    description: chalk.yellow(
      "Escolha entre o tipo de QRcode (1- NORMAL ou (2- TERMINAL"
    ),
    pattern: /^[1-2]+$/,
    message: chalk.red.italic("Escolha apenas entre 1 e 2"),
    required: true,
  },
];

export default promptSchemaQRCode;
