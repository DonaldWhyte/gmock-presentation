function drawDepGraph(options) {
    var cy = cytoscape({
        container: document.getElementById(options.canvasId),

        zoomingEnabled: false,
        userZoomingEnabled: false,
        panningEnabled: false,
        userPanningEnabled: false,
        boxSelectionEnabled: false,

        // TODO: fully disable clicks
        autoungrabify: true,
        autounselectify: true,
        touchTapThreshold: -100,
        desktopTapThreshold: -100,

        layout: {

        },

        style: [
            {
                selector: 'node',
                style: {
                    'width': 75,
                    'height': 75,
                    'background-color': 'data(colour)',
                    'border-color': 'black',
                    'border-width': '4px',


                    'content': 'data(id)',
                    'text-valign': 'top',
                    'text-halign': 'center',
                    'font-family': 'monospace',
                    'font-size': '32px',
                    'color': '#2222ff', // rgb(34, 34, 255)

                    'selectable': false
                }
            },

            {
                selector: 'edge',
                style: {
                    'width': 8,
                    'target-arrow-shape': 'triangle',
                    'line-color': '#000',
                    'target-arrow-color': '#000',

                    'selectable': false
                }
            }
        ],

        elements: {
            nodes: options.nodes,
            edges: options.edges
        },

        ready: function(event) {
            event.cy.autounselectify(true);
        }
    });
}
