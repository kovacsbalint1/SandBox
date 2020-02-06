/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable no-var */
import fs from "fs";
import http from "http";

interface InputInterface {
    name: string;
    age: number;
    male: boolean;
}
export default class Content {
    public content(req: http.IncomingMessage, res: http.ServerResponse): void {
        // favicon.ico kérés kiszolgálása:
        if (req.url === "/favicon.ico") {
            res.writeHead(200, { "Content-Type": "image/x-icon" });
            fs.createReadStream("favicon.ico").pipe(res);
            return;
        }
        // Weboldal inicializálása + head rész:
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.write("<!DOCTYPE html>");
        res.write("<html lang='hu'>");
        res.write("<head>");
        res.write("<style>input, pre {font-family:monospace; font-size:1em; font-weight:bold;}</style>");
        res.write("<meta name='viewport' content='width=device-width, initial-scale=1.0'>");
        res.write("<title>Jedlik Ts Template</title>");
        res.write("</head>");
        res.write("<body><form><pre>");

        // Kezd a kódolást innen -->

        var age: number = 5;
        res.write(`Kor: ${age}\n`);
        var name: string = "Józsi";
        res.write(`Név: ${name}\n`);
        var igaze: boolean = false;
        res.write(`${igaze}\n`);
        let borszinek: string[] = ["fehér", "fehér", "fehér"];
        for (var index in borszinek) {
            res.write(borszinek[index] + " ");
        }
        res.write("\n");
        var ember: [number, string, boolean] = [5, "Józsi", false];
        for (var index in ember) {
            res.write(ember[index] + " ");
        }
        res.write("\n");
        enum Serek {
            Lager,
            Ale,
            Wheat,
            Stout
        }
        /*for (var index in Serek) {
            res.write(Serek[index] + " ");
        }*/
        res.write("\n");
        let izé: string | number;
        izé = 156;
        izé = "Ember";
        res.write(izé + "\n");
        /*let valami: any = "Hello World!";
        valami = 23;
        valami = true;
        res.write(valami + "\n");*/

        function monddHello(): void {
            res.write("Hello!");
        }

        let beszéd: void = monddHello();
        res.write(beszéd);
        // <---- Fejezd be a kódolást

        res.write("</pre></form></body></html>");
        res.end();
    }
}
