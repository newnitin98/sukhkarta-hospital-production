# Sukhkarta Hospital — Graphify Knowledge Layer

This folder contains the knowledge graph and project memory layer for the Sukhkarta Hospital website.

## Files

| File | Purpose |
|------|---------|
| `hospital-knowledge-graph.json` | Full Schema.org knowledge graph for the hospital entity |
| `doctors-knowledge-graph.json` | Physician schema for Dr. Gunjan and Dr. Tanu |
| `services-knowledge-graph.json` | MedicalTherapy and DiagnosticTest schema for all services |
| `seo-knowledge-graph.json` | SEO target keywords, local targets, page priorities |
| `project-memory.md` | Project context, architecture decisions, content notes |
| `route-map.md` | All page routes and their status |
| `component-map.md` | Component hierarchy and dependencies |
| `content-map.md` | Content structure by section |
| `appointment-module-roadmap.md` | Phase 2 appointment backend plan |
| `future-phase-roadmap.md` | Full multi-phase product roadmap |

## Usage

These JSON-LD graphs are embedded in page `<head>` via the `SchemaScript` component.
They also serve as a knowledge reference for future AI-assisted development.
