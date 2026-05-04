# Minority Report Gesture Graph

An open-source spatial computing demo that turns a normal laptop webcam into a hand-controlled 3D knowledge graph.

Live demo:

https://teleclaudius.bles-software.com/spatial-gesture-graph

## What It Does

- Tracks one or two hands in the browser using MediaPipe Hands.
- Renders a Three.js 3D knowledge graph.
- Uses raycasting to point at graph nodes.
- Uses pinch with hysteresis for stable select and grab.
- Uses fast open-hand swipes to spin the graph.
- Uses two simultaneous pinches to zoom in and out.
- Falls back to mouse move, click, drag, and wheel when camera access is unavailable.

Webcam frames stay local. The demo has no backend dependency.

## Run Locally

```bash
npm start
```

Then open:

```text
http://127.0.0.1:8080
```

## Gesture Map

- Open hand: move cursor and throw the graph with fast swipes.
- Pinch: select, inspect, and hold to grab a node.
- Two pinches: pull hands apart to zoom out, push hands together to zoom in.
- Mouse fallback: move, click, drag, and wheel.

## Files

- `index.html`: complete static demo.
- `server.js`: minimal local server.
- `package.json`: local run and syntax-check scripts.

## Notes

This is a public proof-of-concept. Production spatial interfaces should add deeper filtering, accessibility alternatives, explicit consent UX, device testing, and performance tuning for large real datasets.
