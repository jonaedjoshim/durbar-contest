function extractBodyContent(htmlString: string): string {
    const start = htmlString.indexOf("<body>");
    const end = htmlString.indexOf("</body>");

    return htmlString.slice(start + "<body>".length, end);
}