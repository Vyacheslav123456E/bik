import fetch from 'node-fetch';
import admZip from 'adm-zip';
import xml2js from 'xml2js';
import iconv from 'iconv-lite';
import  fs from 'fs';

class Services {
    async fetchData(url) {
        try {
            const response = await fetch(url);
            const buffer = await response.buffer();
            const zip = new admZip(buffer);
            const zipEntries = zip.getEntries();
            let rest = await this.parseXML(zipEntries);
            return await this.prepareData(rest)
        } catch (error) {
            console.error('Ошибка: ', error);
            throw error;
        }
    }
    async parseXML(xml) {
        const xmlEntry = xml.find(entry => entry.entryName.endsWith('.xml'));
        const xmlString = xmlEntry.getData().toString();
        return await xml2js.parseStringPromise(xmlString);

    }
    prepareData(xmlData) {
     //  console.log(xmlData)
       let result = [];
        const parser = new xml2js.Parser();
        xmlData.ED807.BICDirectoryEntry.map(el =>{
            result.push(
                {
                    bic: el['$'].BIC,
                    name:  el['ParticipantInfo'][0]['$'].NameP.toString(),
                    corrAccount: el['Accounts'] !== undefined ?  el['Accounts'][0]['$'].Account : ''
                })
        })
        return result;
    }
}
export default  new Services();