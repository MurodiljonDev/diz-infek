import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./disable.scss"

export default function DisabledAccordion() {
  return (
    <div>
      <Accordion border={"none"}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography fontFamily={"Unbounded,sans-serif"}
                    fontSize={"32px"} fontWeight={"500"}
                    lineHeight={"32px"} color={"#676D83"}>Zararkunandalarni yo'q qilish qanday amalga oshiriladi?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography fontFamily={"Unbounded,sans-serif"}
                    fontSize={"24px"} fontWeight={"500"}
                    lineHeight={"32px"} color={"#106D93"}>
          Махсус асбоб-ускуналар ёрдамида инсектитсидлар
        аерозолли туманга айланади ва девор қоғози, деворлар
         ва тахта плиталари орасидаги енг кичик бўшлиқларга, кўзга
          кўринмас ҳашаротлар учун потентсиал 'яшириш жойлари' га киради.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography fontFamily={"Unbounded,sans-serif"}
                    fontSize={"32px"} fontWeight={"500"}
                    lineHeight={"32px"} color={"#676D83"}>Siz foydalana oladigan dorilar havflimi?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography fontFamily={"Unbounded,sans-serif"}
                    fontSize={"24px"} fontWeight={"500"}
                    lineHeight={"32px"} color={"#106D93"}>
          Препаратлар одамлар, уй ҳайвонлари ва ўсимликлар учун хавфли емас.
         Аммо даволанишдан кейин хонани 40 дақиқа давомида вентилятсия
          қилиш керак.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography fontFamily={"Unbounded,sans-serif"}
                    fontSize={"32px"} fontWeight={"500"}
                    lineHeight={"32px"} color={"#676D83"}>Menga uyimni davolanishga tayyorlashning
            4 qandaydir usuli kerakmi?</Typography>
        </AccordionSummary>
         <AccordionDetails>
          <Typography fontFamily={"Unbounded,sans-serif"}
                    fontSize={"24px"} fontWeight={"500"}
                    lineHeight={"32px"} color={"#106D93"}>
          Асосан, идиш-товоқ ва шахсий гигиена воситаларини
           изолятсия қилишингиз керак. Даволаш пайтида уй ҳайвонлари
            ҳам изолятсия қилиниши керак. Мебел ёки маиший техникани
             кўчиришга ҳожат йўқ.
          </Typography>
          </AccordionDetails>
      </Accordion>
    </div>
  );
}