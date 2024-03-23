import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTranslation } from 'react-i18next';
import "./disable.scss"

export default function DisabledAccordion() {
  const {t} = useTranslation()
  return (
    <div>
      <Accordion border={"none"}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography fontFamily={"Unbounded,sans-serif"}
                    fontSize={"26px"} fontWeight={"500"}
                    lineHeight={"32px"} color={"#676D83"}
                    padding={"25px"}>{t('main.faq.one.title')}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography fontFamily={"Unbounded,sans-serif"}
                    fontSize={"16px"} fontWeight={"500"}
                    lineHeight={"32px"} color={"#444343"}
                    padding={"12px"}>
          {t('main.faq.one.description')}
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
                    fontSize={"26px"} fontWeight={"500"}
                    lineHeight={"32px"} color={"#676D83"}
                    padding={"25px"}>{t('main.faq.two.title')}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography fontFamily={"Unbounded,sans-serif"}
                    fontSize={"16px"} fontWeight={"500"}
                    lineHeight={"32px"} color={"#444343"}
                    padding={"12px"}>
        {t('main.faq.two.description')}
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
                    fontSize={"26px"} fontWeight={"500"}
                    lineHeight={"32px"} color={"#676D83"}
                    padding={"25px"}>{t('main.faq.three.title')}</Typography>
        </AccordionSummary>
         <AccordionDetails>
          <Typography fontFamily={"Unbounded,sans-serif"}
                    fontSize={"16px"} fontWeight={"500"}
                    lineHeight={"32px"} color={"#444343"}
                    padding={"8px"}>
            {t('main.faq.three.description')}
          </Typography>
          </AccordionDetails>
      </Accordion>
    </div>
  );
}