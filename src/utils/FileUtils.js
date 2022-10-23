import path from "path";
import recursive from "recursive-readdir";

class FileUtils {

    static async getIconPaths() {

        const publicPath = path.join(process.cwd(), "public");

        const iconsPath = path.join(publicPath, "fontawesome-free-6.2.0-web");

        return new Promise((resolve, reject) => {

            recursive(iconsPath, [".DS_Store"], function (error, files) {

                if (error) {
                    reject(error);
                    return;
                }

                let f = [];

                files.forEach(file =>{
                    f.push(file.replace(publicPath, ""));
                });

                resolve(f.sort((a,b) => a.toUpperCase() - b.toUpperCase()));
            });
        });
    }
}

export default FileUtils;