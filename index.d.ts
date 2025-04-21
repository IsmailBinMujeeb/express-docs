declare module "express-docs" {
    import { RequestHandler } from "express";

    interface ExpressDocsOptions {
        file?: string = "express-docs";
        ext?: "json" | "yml" | "yaml" = "json";
        engine?: "ejs" | "pug" | "hbs" = "ejs";
    }

    const expressDocs: (url: string, options: ExpressDocsOptions) => RequestHandler;

    export = expressDocs;
}
