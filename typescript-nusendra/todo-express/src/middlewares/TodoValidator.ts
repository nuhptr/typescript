import { Request, Response, NextFunction } from "express"
import { check, validationResult } from "express-validator"

const validateTodo = [
   check("description").isString(),
   (req: Request, res: Response, next: NextFunction) => {
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
         return res.status(422).send({ errors: errors.array() })
      }

      return next()
   },
]

export default validateTodo
