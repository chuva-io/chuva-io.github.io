#!/bin/bash

SESSION="monorepo"

# Check if session exists
tmux has-session -t $SESSION 2>/dev/null

if [ $? != 0 ]; then
	# Install dependencies
	rm -rf node_modules
	yarn

	# Create session with window for Less be
	tmux new-session -d -s $SESSION -n "less"
	tmux send-keys -t $SESSION:less "yarn dev:less" C-m

	# Create window for web
	tmux new-window -t $SESSION -n "web"
	tmux send-keys -t $SESSION:web "yarn dev:web" C-m
fi

# # Open VSCode workspace
code .

# Attach to session
tmux attach-session -t $SESSION
