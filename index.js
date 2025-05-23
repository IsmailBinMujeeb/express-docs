import { Router } from 'express';
import YAML from "yaml"
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

// Get the directory name of the current module
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const router = Router();

export default (url="/", options={}) => {
    return router.get(url, (_, res) => {

        const file = options.file || 'express-docs';
        let ext = options.ext;
        let engine = options.engine || "ejs"

        if (!(ext == 'json' || ext == 'yaml' || ext == 'yml')) ext = 'json';

        const fileContent = fs.readFileSync(path.join(__dirname, "../../", `${file}.${ext}`), 'utf-8');
        const templatePath = path.join(__dirname, "views", `${engine}-express-docs.${engine}`);

        let jsonData = null;
        if (ext === 'json') jsonData = JSON.parse(fileContent)
        else if (ext === 'yaml' || ext === 'yml') jsonData = YAML.parse(fileContent)
    
        res.render(templatePath, { docs: jsonData || null });
    })
};