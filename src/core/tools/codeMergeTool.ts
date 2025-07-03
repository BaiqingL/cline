export const codeMergeToolName = "CodeMerge"

const descriptionForAgent = `Request to merge code with edit instructions using local Ollama AI. Use this when you need to apply complex edit patterns to code that follow the "// ... existing code ..." format. This tool is particularly useful for applying multiple edits to a single file in a structured way.`

export const codeMergeToolDefinition = () => ({
	name: codeMergeToolName,
	descriptionForAgent,
	inputSchema: {
		type: "object",
		properties: {
			original_code: {
				type: "string",
				description: "The original code that needs to be modified",
			},
			edit_snippet: {
				type: "string", 
				description: "The edit instructions in the format with '// ... existing code ...' markers indicating where changes should be applied",
			},
		},
		required: ["original_code", "edit_snippet"],
	},
}) 