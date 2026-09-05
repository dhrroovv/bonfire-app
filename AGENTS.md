# Expo HAS CHANGED

Read the exact versioned docs at https://docs.expo.dev/versions/v57.0.0/ before writing any code.

# Bonfire — Agent Context

## Product

Bonfire is a mobile-first app for groups of friends travelling together. It brings trip group chat, shared memories, and shared expenses into one place.

It is deliberately group-focused. One-to-one chat is not a product goal.

## Current goal

Build the smallest useful first version around this flow:

1. A user signs up.
2. They create a trip group.
3. They add group members.
4. Members chat in the group.

## Scope rules

- Prioritize the core group flow over polish or future features.
- Treat photos/files, expenses, balances, planning, notifications, and real-time complexity as later work unless explicitly requested.
- Build obvious loading, empty, validation, and error states when implementing a user-facing flow.
- Prefer simple, understandable choices over abstractions made for hypothetical growth.
- Do not add a feature merely because WhatsApp, Google Drive, or Splitwise has it.

## Project boundaries

- This repository is for the mobile frontend only.
- The backend is a separate Python project maintained alongside this app.
- The frontend communicates with that backend through an API contract; do not put backend implementation in this repository.
- The intended mobile stack is React Native, Expo, and TypeScript.

## Product language

Use clear, friendly, group-oriented language. Prefer “trip group”, “members”, and “shared” over technical language in user-facing copy.

## Working style

- Keep changes narrow and purposeful.
- Reuse existing project patterns before introducing new ones.
- Do not create folders, dependencies, architecture, or configuration for features that do not exist yet.
- When requirements are unclear, choose the smallest reasonable implementation or ask one focused question.
