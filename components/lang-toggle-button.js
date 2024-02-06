import { AnimatePresence, motion } from 'framer-motion';
import { IconButton, useColorModeValue } from '@chakra-ui/react';
import { MdGTranslate } from 'react-icons/md';
import { useTranslation } from 'react-i18next';

const LangToggleButton = () => {
  const { i18n } = useTranslation();

  const handleLangToggle = () => {
    const newLanguage = i18n.language === 'ru' ? 'kg' : 'ru';
    i18n.changeLanguage(newLanguage);
  };

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        style={{ display: 'inline-block' }}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <IconButton
          aria-label="Toggle language"
          colorScheme={useColorModeValue('purple', 'orange')}
          icon={<MdGTranslate />}
          onClick={handleLangToggle}
        ></IconButton>
      </motion.div>
    </AnimatePresence>
  );
};

export default LangToggleButton;
