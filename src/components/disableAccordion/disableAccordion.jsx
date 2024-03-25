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
          <Typography>{t('main.faq.one.title')}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
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
          <Typography>{t('main.faq.two.title')}</Typography>
        </AccordionSummary> 
        <AccordionDetails>
          <Typography>
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
          <Typography>{t('main.faq.three.title')}</Typography>
        </AccordionSummary>
         <AccordionDetails>
          <Typography>
            {t('main.faq.three.description')}
          </Typography>
          </AccordionDetails>
      </Accordion>
    </div>
  );
}