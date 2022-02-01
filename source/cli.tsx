#!/usr/bin/env node
import React from "react";
import { render } from "ink";
import meow from "meow";
import App from "./ui";

meow(
	`
	Usage
	  $ count-repo-langs

	Options
		--name  Your name

	Examples
	  $ count-repo-langs --name=Jane
	  Hello, Jane
`,
	{
		flags: {
			name: {
				type: "string",
			},
		},
	}
);

render(<App />);
