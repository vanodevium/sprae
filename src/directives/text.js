import { directive, parseExpr } from '../core.js'

// hidden attribute directive example
directive(':text', (el, expr) => {
  let evaluate = parseExpr(expr);
  return (state) => {
    let value = evaluate(state);
    el.textContent = value == null ? '' : value;
  }
})

