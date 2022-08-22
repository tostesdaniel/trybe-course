const Joi = require('joi');

module.exports = () => {
  Joi.object({
    username: Joi.string().alphanum().min(5).required()
    .messages({
      'string.min': '"username" length must be 5 characters long',
      'any.required': '"username" is required',
    }),
    password: Joi.string().min(5).required().messages({
      'string.min': '"password" length must be 5 characters long',
      'any.required': '"password" is required',
    }),
  });
};
