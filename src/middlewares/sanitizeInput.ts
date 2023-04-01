export default function removeHtmlTags(input: string): string {
	return input.replace(/(<([^>]+)>)/gi, "");
}
