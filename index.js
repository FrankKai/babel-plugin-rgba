const hexToRgba = require("./rgba");

module.exports = () => {
  return {
    name: "babel-plugin-rgba",
    visitor: {
      VariableDeclarator(path, state) {
        const alpha = state.opts.alpha;
        if (!alpha) return;
        if (alpha) {
          if (!path.node.init.value || !path.node.init.value.includes("#")) {
            return;
          }
          if (alpha < 0 || alpha > 1) {
            return;
          }
          path.node.init.value = hexToRgba(path.node.init.value, alpha);
        }
      },
      AssignmentExpression(path, state) {
        const alpha = state.opts.alpha;
        if (!alpha) return;
        if (alpha) {
          if (!path.node.right.value || !path.node.right.value.includes("#")) {
            return;
          }
          if (alpha < 0 || alpha > 1) {
            return;
          }
          path.node.right.value = hexToRgba(path.node.right.value, alpha);
        }
      },
    },
  };
};
