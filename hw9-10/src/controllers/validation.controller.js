import * as rules from "../constans/validation.js";

export const getValidationRulesController = (req, res) => {
  res.json(rules);
};
