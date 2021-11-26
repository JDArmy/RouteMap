import stixIcon from "./stix-icon.font";
var vis = require("vis-network/standalone/umd/vis-network.min");

function RouteMap(args) {
  RouteMap._init(args);
}

RouteMap.network = null;
RouteMap.defaultOptions = {
  nodes: {
    font: {
      color: 'blue',
      size: 16,
      multi: true,
      bold: {
        color: "red",
      },
    },
    shape: 'circle',
    shadow: true,
  },
  edges: {
    length: 200,
    color: '#ddd',
    font: {
      color: '#aaa',
      size: 10,
    },
    width: 3,
  },
};

RouteMap.destroy = function () {
  if (RouteMap.network) {
    RouteMap.network.destroy();
    RouteMap.network = null;
  }
};

RouteMap.setOptions = function (options) {
  let opts = RouteMap.defaultOptions;
  if (options) {
    Object.keys(options).map((key) => {
      opts[key] = options[key];
    });
  }
  return opts;
};

RouteMap.parseData = function (dotContent) {
  let data = vis.parseDOTNetwork(dotContent);
  dotContent.replace(/^(digraph|dinetwork|graph)\s*(UD|DU|RL|LR)?\s*[^\w]+/,function($0,$1,$2){
    if($2){
      RouteMap.defaultOptions.layout = {
        hierarchical: {
          direction: $2,
        },
      };
    }
  })

  data.edges = data.edges.map(edge=>{
    //处理 edge 中的 fontbackground
    if(edge.fontbackground){
      edge.font = {
        background: edge.fontbackground
      };
    }
    return edge;
  });

  data.nodes = data.nodes.map(node=>{
    //处理node中的icon
    if(node.icon && stixIcon[node.icon]){
      node.shape = 'icon';
      node.icon = {
        face: 'stix-icons',
        code: stixIcon.black_o[node.icon].content,
        color: stixIcon[node.icon].color,
        size: 50,
      };
    }

    if(!node.font) node.font = {};
    //处理node中的 fontboldcolor
    if(node.fontboldcolor){
      node.font['bold'] = {
        color: node.fontboldcolor
      }
    }
    //处理node中的 fontbackground
    if(node.fontbackground){
      node.font['background'] = node.fontbackground;
    }
    //处理node中的 margin
    if(!node.margin) node.margin = {};
    if(node.margintop){
      node.margin = {
        top: node.margintop
      }
    }
    if(node.marginleft){
      node.margin = {
        left: node.marginleft
      }
    }
    if(node.marginright){
      node.margin = {
        right: node.marginright
      }
    }
    if(node.marginbottom){
      node.margin = {
        bottom: node.marginbottom
      }
    }
    return node;
  });
  console.log(data);
  return data;
};

RouteMap._init = function (args) {
  RouteMap.destroy();

  if (!args.id) {
    throw console.error("Not set route map container id");
  }
  let container = document.getElementById(args.id);
  if (!container) {
    throw console.error("Route map container not found: " + args.id);
  }
  let data = RouteMap.parseData(args.dotContent);
  let options = RouteMap.setOptions(args.options);

  RouteMap.network = new vis.Network(container, data, options);
};

export default RouteMap;
