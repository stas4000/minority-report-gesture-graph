# Minority Report Gesture Graph

An open-source spatial computing demo that turns a normal laptop webcam into a hand-controlled 3D knowledge graph over the live camera feed.

Live demo:

https://teleclaudius.bles-software.com/spatial-gesture-graph

## What It Does

- Mirrors the webcam as a full-screen camera layer.
- Tracks one or two hands in the browser using MediaPipe Hands.
- Renders a transparent 3d-force-graph layer over the camera.
- Uses pinch midpoint selection instead of open-hand pointing.
- Uses pinch with hysteresis for stable grab and drag.
- Uses two simultaneous pinches to zoom in and out.
- Falls back to mouse move, click, drag, and wheel when camera access is unavailable.

Webcam frames stay local. The demo has no backend dependency.

## Architecture

The page is built as four layers:

- Camera layer: a mirrored HTML video element fills the screen.
- Graph layer: 3d-force-graph renders spring-like nodes and links with a transparent WebGL canvas.
- Hand layer: MediaPipe landmarks are drawn on a transparent canvas.
- UI layer: compact debug, gesture, and node detail panels sit above the graph.

The gesture bridge maps MediaPipe's thumb and index landmarks into normalized screen coordinates. Open-hand pointing is intentionally ignored. A one-hand pinch selects the nearest projected graph node and can pull it through the force simulation. Two simultaneous pinches map hand span to zoom.

The graph data is a simple JSON shape:

```json
{
  "nodes": [{ "id": "spatial", "label": "Spatial UX", "description": "..." }],
  "links": [{ "source": "spatial", "target": "gesture" }]
}
```

A backend can generate that JSON from Claude, then the frontend can feed it directly into 3d-force-graph.

## Run Locally

```bash
npm start
```

Then open:

```text
http://127.0.0.1:8080
```

## Gesture Map

- One-hand pinch: select, inspect, and hold to grab a node.
- Hold pinch: move the hand to drag the grabbed node.
- Two pinches: pull hands apart to zoom out, push hands together to zoom in.
- Mouse fallback: move, click, drag, and wheel.

## Files

- `index.html`: complete static demo.
- `server.js`: minimal local server.
- `package.json`: local run and syntax-check scripts.

## Notes

This is a public proof-of-concept. Production spatial interfaces should add deeper filtering, accessibility alternatives, explicit consent UX, device testing, and performance tuning for large real datasets.
