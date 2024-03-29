/* eslint-disable no-unused-vars */
import i18n from '../components/i18n';
import NextLink from 'next/link'
import { useState } from 'react'
import {
    Flex,
    Container,
    Box,
    Button,
    Input,
    Heading,
    Image,
    useColorModeValue,
    Text,
    // video
} from "@chakra-ui/react"
import { useTranslation } from 'react-i18next';
import { IoLogoTiktok, IoLogoInstagram, IoLogoWhatsapp } from 'react-icons/io5'
import { FaMagnifyingGlassLocation } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import Section from "../components/section"
import { NumSection, NumYear } from '../components/num';
import { Paragraph, LargeText } from "../components/paragraph"
import axios from 'axios'

const Page = () => {

    const { t, i18n } = useTranslation();
    const [trackingNumber, setTrackingNumber] = useState('');
    const [trackingStatus, setTrackingStatus] = useState('');
    const [trackingInfo, setTrackingInfo] = useState([]);

    const trackPackage = async () => {
        try {
          const response = await axios.post('/api/track', { tracking_number: trackingNumber }, {
            headers: {
              'Content-Type': 'application/json',
            },
          });

          const result = response.data;

          // Обновляем состояние React
          setTrackingStatus(result.status);
          setTrackingInfo(result.information);

        } catch (error) {
          console.error(error);
          // Handle errors
        }
      };

    const handleTrackButtonClick = async () => {
    if (trackingNumber) {
        await trackPackage();
    }
    };

    return (
        <Container>

            <Box position="relative" h="auto" pt="3" borderRadius="lg" overflow="hidden">
                <Image
                    borderWidth={2}
                    borderStyle="solid"
                    maxWidth="100%"
                    height="auto"
                    borderRadius="lg"
                    src="/images/main.jpg"
                    alt="Delivery Image"
                />
            </Box>

            <Box my={2} />

            <Box
                borderRadius="lg"
                bg={useColorModeValue('orange.400', 'orange.300')}
                p={3}
                mb={6}
                align="center"
            >
                {t('hello')}
            </Box>

            <Box display={{md: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Исмаилов Аскарбек
                    </Heading>
                    <p>{t('askar')}</p>
                </Box>
                <Box flexShrink={8} mt={{base: 4, md: 8}} ml={{md: 6}} align="center">
                    <Image
                      borderColor="whiteAlpha.800"
                      borderWidth={2}
                      borderStyle="solid"
                      maxWidth="100px"
                      display="inline-block"
                      borderRadius="full"
                      src="/images/askar.jpg"
                      alt="Profile Image"
                    />
                </Box>
            </Box>
            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    {t('tracking')}
                </Heading>
                <Paragraph>
                    <LargeText>{t('tracking_description')}</LargeText>
                    <br /> {t('tracking_description2')}
                </Paragraph>
                <Box my={5} />
                <Input
                    type="text"
                    placeholder={t('number_track')}
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    _focus={{ borderColor: "darkorange"}}
                    borderColor="black"
                    borderWidth={2}
                />
                <Text>{trackingStatus}</Text>
                {trackingInfo.length > 0 && (
                <div>
                    {trackingInfo.map((item, index) => (
                    <div key={index}>
                        <p>{item.event}: {item.info}</p>
                    </div>
                    ))}
                </div>
                )}
                <Box align="center" my={4}>
                    <Button
                        leftIcon={<FaMagnifyingGlassLocation />}
                        onClick={handleTrackButtonClick}
                        colorScheme="orange"
                    >
                        {t('track')}
                    </Button>
                </Box>
            </Section>

            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    {t('our_social_network')}
                </Heading>
                <Box my={5} />
                <Flex
                  justifyContent={{ base: "center", md: "space-between" }}
                  alignItems={{ base: "center", md: "center" }}
                  direction={{ base: "column", md: "row" }}
                  spacing={{ base: 4, md: 0 }}
                >
                    <Box mx={10}>
                        <Box align="center" my={4}>
                            <Button
                                as={NextLink}
                                href="https://www.instagram.com/kosmos.express?igsh=bm12dmdyOWNpZWZt"
                                scroll={false}
                                leftIcon={<IoLogoInstagram />}
                                colorScheme="orange"
                                size="lg"
                                w="100%"
                            >
                                Instagram
                            </Button>
                        </Box>

                        <Box align="center" my={4}>
                            <Button
                                as={NextLink}
                                href="https://www.tiktok.com/@kosmos.express"
                                scroll={false}
                                leftIcon={<IoLogoTiktok />}
                                colorScheme="orange"
                                size="lg"
                                w="100%"
                            >
                                Tik-Tok
                            </Button>
                        </Box>
                    </Box>
                    <Box mx={6}>
                        <Box align="center" my={4}>
                            <Button
                                as={NextLink}
                                href="https://wa.me/message/LVVKEIJSJWPXC1"
                                scroll={false}
                                leftIcon={<IoLogoWhatsapp />}
                                colorScheme="orange"
                                size="lg"
                                w="100%"
                            >
                                WhatsApp
                            </Button>
                        </Box>

                        <Box align="center" my={4}>
                            <Button
                                as={NextLink}
                                href="https://2gis.kg/bishkek/geo/15763234351000928"
                                scroll={false}
                                leftIcon={<FaMapMarkerAlt />}
                                colorScheme="orange"
                                size="lg"
                                w="100%"
                            >
                                Адрес
                            </Button>
                        </Box>
                    </Box>
                </Flex>
            </Section>

            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                {t('our_services')}
                </Heading>
                <NumSection my={4}>
                <NumYear>{t('deliveryfromchina')}</NumYear>
                    {t('deliverydescription')}
                </NumSection>
                <NumSection my={4}>
                    <NumYear>{t('delivery')}</NumYear>
                    {t('deliverydescrip')}
                </NumSection>
                {/* <NumSection my={4}>
                    <NumYear>Доставка по Кыргызстану</NumYear>
                    Делая покупки в заграничных магазинах мы подумали и о том, что если наши покупатели будут проживать за пределами Бишкека.
                    Благодаря нашим партнерам мы можем доставить посылки наших клиентов как до точек самовывоза в других городах, так и осуществить передачу товара лично в руки
                </NumSection> */}
                <NumSection my={4}>
                    <NumYear>{t('address_stock')}</NumYear>
                        {t('address_instruct')}
                </NumSection>
                <NumSection my={4}>
                    <NumYear>{t('repackaging')}</NumYear>
                        {t('repackaging_descrip')}
                </NumSection>
                <NumSection>
                    <NumYear>{t('tracking')}</NumYear>
                    {t('tracking_description2')}
                </NumSection>
            </Section>

            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    {t('about_us')}
                </Heading>
                <Paragraph>
                    {t('about_descrip')}
                    <br /> {t('about_desc2')}
                    <br /> {t('about_desc3')}
                </Paragraph>
            </Section>
        </Container>
    )
}

export default Page;
