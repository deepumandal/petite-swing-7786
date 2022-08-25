import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { BsEyeFill } from "react-icons/bs";
import styles from "./Auth.module.css";
import { Foot } from "./Foot";
import { Navabr } from "./Navabr";
import GoogleLogin from "react-google-login";

export const Sign = () => {
  const onLoginSuccess = (res) => {
    // console.log(res);
  };

  const onLoginError = (err) => {
    // console.log(err);
  };

  const clientId =
    "175168483203-8td0h9fbnrfjfpj4uf1rpc5j79kukgfm.apps.googleusercontent.com";

  return (
    <>
      <Navabr />
      <Box w={["100%", "100%", "100%", "75%"]} m="50px auto" p="0px 40px">
        <SimpleGrid columns={[1, null, 2]} spacing="0px">
          <Box
            boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
            h={["auto", "auto", "auto", "auto"]}
            textAlign={"center"}
          >
            <VStack
              justify={"space-between"}
              h={["auto", "auto", "auto", "100vh"]}
            >
              <Box w="80%" m="auto" className={styles.signuppage}>
                <Image
                  width={"150px"}
                  pt="40px"
                  px="30px"
                  src="https://app.hellobonsai.com/assets/logos/bonsai-0fe7c417d79806408d8117d5a0ca871f0be3afb1104d54b53f59f53cbda2f28b.svg"
                />
                <Text
                  fontWeight={"bold"}
                  width="70%"
                  m="auto"
                  textAlign={"left"}
                >
                  Join 500,000+ freelancers and agencies using Bonsai.
                </Text>
              </Box>
              <Box w="60%" m="auto">
                <svg
                  className="signup-page-cp-quote-icon"
                  width="22"
                  height="16"
                  viewBox="0 0 22 16"
                  fill="none"
                >
                  <path
                    d="M20.4582 3.2C18.1262 3.36 16.1387 4.82667 15.1847 6.85333H18.2057C19.4512 6.85333 20.4847 7.86667 20.4847 9.14667V13.7067C20.4847 14.96 19.4777 16 18.2057 16H13.6212C12.3756 16 11.3421 14.9867 11.3421 13.7067V9.14667C11.3421 4.10667 15.4232 0 20.4317 0C20.4317 0 21.3328 0 21.3328 0.906667C21.3328 0.906667 21.3328 1.06667 21.3328 2.26667C21.3593 3.2 20.4582 3.2 20.4582 3.2ZM9.08961 3.2C6.75758 3.36 4.77006 4.82667 3.81605 6.85333H6.83708C8.0826 6.85333 9.11611 7.86667 9.11611 9.14667V13.7067C9.11611 14.96 8.1091 16 6.83708 16H2.27903C1.03351 16 0 14.9867 0 13.7067V9.14667C0 4.10667 4.08105 0 9.08961 0C9.08961 0 9.99062 0 9.99062 0.906667C9.99062 0.906667 9.99062 1.06667 9.99062 2.26667C9.99062 3.2 9.08961 3.2 9.08961 3.2Z"
                    fill="#00b289"
                  ></path>
                </svg>
                <Text fontSize="12" fontStyle={"italic"}>
                  Anyone doing #freelance work should use @bonsaiinc for
                  contracts/payment. It's amazing and saves boatloads of time.
                  Nathanael Smith, Product Designer
                </Text>
              </Box>
            </VStack>
          </Box>

          <Box
            textAlign={"center"}
            p="30px 0px"
            boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
          >
            <Heading p="0px 30px" as="h3" size="lg" textAlign={"left"}>
              Try Bonsai free with your Workflow today{" "}
            </Heading>
            <br />
            <br />
            <Box w="100%">
              <GoogleLogin
                className={styles.signingoogle1}
                clientId={clientId}
                buttonText="Sign up with Google"
                onSuccess={onLoginSuccess}
                onFailure={onLoginError}
                cookiePolicy={"single_host_origin"}
                isSignedIn={true}
              />
            </Box>

            <br />
            <br />
            <Text fontSize={"12px"} textAlign={"center"} color="#bbbbbb">
              OR
            </Text>
            <br />
            <Box w="80%" m="0px auto">
              <Text
                textAlign={"left"}
                mb="8px"
                textTransform={"uppercase"}
                fontSize="14px"
              >
                Email
              </Text>

              <Input
                type="email"
                placeholder="your@gmail.com"
                borderRadius={0}
              />
            </Box>
            <br />
            <Box w="80%" m="0px auto">
              <Text
                textAlign={"left"}
                mb="8px"
                textTransform={"uppercase"}
                fontSize="14px"
              >
                full name
              </Text>

              <Input type="text" placeholder="Jane Smith" borderRadius={0} />
            </Box>
            <br />
            <Box w="80%" m="0px auto">
              <Text
                textAlign={"left"}
                mb="8px"
                textTransform={"uppercase"}
                fontSize="14px"
              >
                Password
              </Text>

              <InputGroup m="auto">
                <Input type=".........." placeholder="Password " />

                <InputRightElement children={<BsEyeFill color="gray.300" />} />
              </InputGroup>
              <Text fontSize="10px" textAlign={"left"} mt="5px">
                Your password must be at least 6 characters
              </Text>
            </Box>

            <Box w="80%" m="20px auto">
              <HStack gap="20px">
                <Box w="60%">
                  <Text
                    textAlign={"left"}
                    mb="8px"
                    textTransform={"uppercase"}
                    fontSize="14px"
                  >
                    country
                  </Text>

                  <Select placeholder="India" textTransform={"uppercase"}>
                    <option value="Afghanistan">Afghanistan</option>
                    <option value="Åland Islands">Åland Islands</option>
                    <option value="Albania">Albania</option>
                    <option value="Algeria">Algeria</option>
                    <option value="American Samoa">American Samoa</option>
                    <option value="Andorra">Andorra</option>
                    <option value="Angola">Angola</option>
                    <option value="Anguilla">Anguilla</option>
                    <option value="Antarctica">Antarctica</option>
                    <option value="Antigua and Barbuda">
                      Antigua and Barbuda
                    </option>
                    <option value="Argentina">Argentina</option>
                    <option value="Armenia">Armenia</option>
                    <option value="Aruba">Aruba</option>
                    <option value="Australia">Australia</option>
                    <option value="Austria">Austria</option>
                    <option value="Azerbaijan">Azerbaijan</option>
                    <option value="Bahamas">Bahamas</option>
                    <option value="Bahrain">Bahrain</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Barbados">Barbados</option>
                    <option value="Belarus">Belarus</option>
                    <option value="Belgium">Belgium</option>
                    <option value="Belize">Belize</option>
                    <option value="Benin">Benin</option>
                    <option value="Bermuda">Bermuda</option>
                    <option value="Bhutan">Bhutan</option>
                    <option value="Bolivia">Bolivia</option>
                    <option value="Bosnia and Herzegovina">
                      Bosnia and Herzegovina
                    </option>
                    <option value="Botswana">Botswana</option>
                    <option value="Bouvet Island">Bouvet Island</option>
                    <option value="Brazil">Brazil</option>
                    <option value="British Indian Ocean Territory">
                      British Indian Ocean Territory
                    </option>
                    <option value="Brunei Darussalam">Brunei Darussalam</option>
                    <option value="Bulgaria">Bulgaria</option>
                    <option value="Burkina Faso">Burkina Faso</option>
                    <option value="Burundi">Burundi</option>
                    <option value="Cambodia">Cambodia</option>
                    <option value="Cameroon">Cameroon</option>
                    <option value="Canada">Canada</option>
                    <option value="Cape Verde">Cape Verde</option>
                    <option value="Cayman Islands">Cayman Islands</option>
                    <option value="Central African Republic">
                      Central African Republic
                    </option>
                    <option value="Chad">Chad</option>
                    <option value="Chile">Chile</option>
                    <option value="China">China</option>
                    <option value="Christmas Island">Christmas Island</option>
                    <option value="Cocos (Keeling) Islands">
                      Cocos (Keeling) Islands
                    </option>
                    <option value="Colombia">Colombia</option>
                    <option value="Comoros">Comoros</option>
                    <option value="Congo">Congo</option>
                    <option value="Congo, The Democratic Republic of The">
                      Congo, The Democratic Republic of The
                    </option>
                    <option value="Cook Islands">Cook Islands</option>
                    <option value="Costa Rica">Costa Rica</option>
                    <option value="Cote D'ivoire">Cote D'ivoire</option>
                    <option value="Croatia">Croatia</option>
                    <option value="Cuba">Cuba</option>
                    <option value="Cyprus">Cyprus</option>
                    <option value="Czech Republic">Czech Republic</option>
                    <option value="Denmark">Denmark</option>
                    <option value="Djibouti">Djibouti</option>
                    <option value="Dominica">Dominica</option>
                    <option value="Dominican Republic">
                      Dominican Republic
                    </option>
                    <option value="Ecuador">Ecuador</option>
                    <option value="Egypt">Egypt</option>
                    <option value="El Salvador">El Salvador</option>
                    <option value="Equatorial Guinea">Equatorial Guinea</option>
                    <option value="Eritrea">Eritrea</option>
                    <option value="Estonia">Estonia</option>
                    <option value="Ethiopia">Ethiopia</option>
                    <option value="Falkland Islands (Malvinas)">
                      Falkland Islands (Malvinas)
                    </option>
                    <option value="Faroe Islands">Faroe Islands</option>
                    <option value="Fiji">Fiji</option>
                    <option value="Finland">Finland</option>
                    <option value="France">France</option>
                    <option value="French Guiana">French Guiana</option>
                    <option value="French Polynesia">French Polynesia</option>
                    <option value="French Southern Territories">
                      French Southern Territories
                    </option>
                    <option value="Gabon">Gabon</option>
                    <option value="Gambia">Gambia</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Germany">Germany</option>
                    <option value="Ghana">Ghana</option>
                    <option value="Gibraltar">Gibraltar</option>
                    <option value="Greece">Greece</option>
                    <option value="Greenland">Greenland</option>
                    <option value="Grenada">Grenada</option>
                    <option value="Guadeloupe">Guadeloupe</option>
                    <option value="Guam">Guam</option>
                    <option value="Guatemala">Guatemala</option>
                    <option value="Guernsey">Guernsey</option>
                    <option value="Guinea">Guinea</option>
                    <option value="Guinea-bissau">Guinea-bissau</option>
                    <option value="Guyana">Guyana</option>
                    <option value="Haiti">Haiti</option>
                    <option value="Heard Island and Mcdonald Islands">
                      Heard Island and Mcdonald Islands
                    </option>
                    <option value="Holy See (Vatican City State)">
                      Holy See (Vatican City State)
                    </option>
                    <option value="Honduras">Honduras</option>
                    <option value="Hong Kong">Hong Kong</option>
                    <option value="Hungary">Hungary</option>
                    <option value="Iceland">Iceland</option>
                    <option value="India">India</option>
                    <option value="Indonesia">Indonesia</option>
                    <option value="Iran, Islamic Republic of">
                      Iran, Islamic Republic of
                    </option>
                    <option value="Iraq">Iraq</option>
                    <option value="Ireland">Ireland</option>
                    <option value="Isle of Man">Isle of Man</option>
                    <option value="Israel">Israel</option>
                    <option value="Italy">Italy</option>
                    <option value="Jamaica">Jamaica</option>
                    <option value="Japan">Japan</option>
                    <option value="Jersey">Jersey</option>
                    <option value="Jordan">Jordan</option>
                    <option value="Kazakhstan">Kazakhstan</option>
                    <option value="Kenya">Kenya</option>
                    <option value="Kiribati">Kiribati</option>
                    <option value="Korea, Democratic People's Republic of">
                      Korea, Democratic People's Republic of
                    </option>
                    <option value="Korea, Republic of">
                      Korea, Republic of
                    </option>
                    <option value="Kuwait">Kuwait</option>
                    <option value="Kyrgyzstan">Kyrgyzstan</option>
                    <option value="Lao People's Democratic Republic">
                      Lao People's Democratic Republic
                    </option>
                    <option value="Latvia">Latvia</option>
                    <option value="Lebanon">Lebanon</option>
                    <option value="Lesotho">Lesotho</option>
                    <option value="Liberia">Liberia</option>
                    <option value="Libyan Arab Jamahiriya">
                      Libyan Arab Jamahiriya
                    </option>
                    <option value="Liechtenstein">Liechtenstein</option>
                    <option value="Lithuania">Lithuania</option>
                    <option value="Luxembourg">Luxembourg</option>
                    <option value="Macao">Macao</option>
                    <option value="Macedonia, The Former Yugoslav Republic of">
                      Macedonia, The Former Yugoslav Republic of
                    </option>
                    <option value="Madagascar">Madagascar</option>
                    <option value="Malawi">Malawi</option>
                    <option value="Malaysia">Malaysia</option>
                    <option value="Maldives">Maldives</option>
                    <option value="Mali">Mali</option>
                    <option value="Malta">Malta</option>
                    <option value="Marshall Islands">Marshall Islands</option>
                    <option value="Martinique">Martinique</option>
                    <option value="Mauritania">Mauritania</option>
                    <option value="Mauritius">Mauritius</option>
                    <option value="Mayotte">Mayotte</option>
                    <option value="Mexico">Mexico</option>
                    <option value="Micronesia, Federated States of">
                      Micronesia, Federated States of
                    </option>
                    <option value="Moldova, Republic of">
                      Moldova, Republic of
                    </option>
                    <option value="Monaco">Monaco</option>
                    <option value="Mongolia">Mongolia</option>
                    <option value="Montenegro">Montenegro</option>
                    <option value="Montserrat">Montserrat</option>
                    <option value="Morocco">Morocco</option>
                    <option value="Mozambique">Mozambique</option>
                    <option value="Myanmar">Myanmar</option>
                    <option value="Namibia">Namibia</option>
                    <option value="Nauru">Nauru</option>
                    <option value="Nepal">Nepal</option>
                    <option value="Netherlands">Netherlands</option>
                    <option value="Netherlands Antilles">
                      Netherlands Antilles
                    </option>
                    <option value="New Caledonia">New Caledonia</option>
                    <option value="New Zealand">New Zealand</option>
                    <option value="Nicaragua">Nicaragua</option>
                    <option value="Niger">Niger</option>
                    <option value="Nigeria">Nigeria</option>
                    <option value="Niue">Niue</option>
                    <option value="Norfolk Island">Norfolk Island</option>
                    <option value="Northern Mariana Islands">
                      Northern Mariana Islands
                    </option>
                    <option value="Norway">Norway</option>
                    <option value="Oman">Oman</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="Palau">Palau</option>
                    <option value="Palestinian Territory, Occupied">
                      Palestinian Territory, Occupied
                    </option>
                    <option value="Panama">Panama</option>
                    <option value="Papua New Guinea">Papua New Guinea</option>
                    <option value="Paraguay">Paraguay</option>
                    <option value="Peru">Peru</option>
                    <option value="Philippines">Philippines</option>
                    <option value="Pitcairn">Pitcairn</option>
                    <option value="Poland">Poland</option>
                    <option value="Portugal">Portugal</option>
                    <option value="Puerto Rico">Puerto Rico</option>
                    <option value="Qatar">Qatar</option>
                    <option value="Reunion">Reunion</option>
                    <option value="Romania">Romania</option>
                    <option value="Russian Federation">
                      Russian Federation
                    </option>
                    <option value="Rwanda">Rwanda</option>
                    <option value="Saint Helena">Saint Helena</option>
                    <option value="Saint Kitts and Nevis">
                      Saint Kitts and Nevis
                    </option>
                    <option value="Saint Lucia">Saint Lucia</option>
                    <option value="Saint Pierre and Miquelon">
                      Saint Pierre and Miquelon
                    </option>
                    <option value="Saint Vincent and The Grenadines">
                      Saint Vincent and The Grenadines
                    </option>
                    <option value="Samoa">Samoa</option>
                    <option value="San Marino">San Marino</option>
                    <option value="Sao Tome and Principe">
                      Sao Tome and Principe
                    </option>
                    <option value="Saudi Arabia">Saudi Arabia</option>
                    <option value="Senegal">Senegal</option>
                    <option value="Serbia">Serbia</option>
                    <option value="Seychelles">Seychelles</option>
                    <option value="Sierra Leone">Sierra Leone</option>
                    <option value="Singapore">Singapore</option>
                    <option value="Slovakia">Slovakia</option>
                    <option value="Slovenia">Slovenia</option>
                    <option value="Solomon Islands">Solomon Islands</option>
                    <option value="Somalia">Somalia</option>
                    <option value="South Africa">South Africa</option>

                    <option value="Spain">Spain</option>
                    <option value="Sri Lanka">Sri Lanka</option>
                    <option value="Sudan">Sudan</option>
                    <option value="Suriname">Suriname</option>

                    <option value="Swaziland">Swaziland</option>
                    <option value="Sweden">Sweden</option>
                    <option value="Switzerland">Switzerland</option>

                    <option value="Taiwan">Taiwan</option>
                    <option value="Tajikistan">Tajikistan</option>

                    <option value="Thailand">Thailand</option>
                    <option value="Timor-leste">Timor-leste</option>
                    <option value="Togo">Togo</option>
                    <option value="Tokelau">Tokelau</option>
                    <option value="Tonga">Tonga</option>
                  </Select>
                </Box>
                <Box>
                  <Text
                    textAlign={"left"}
                    mb="8px"
                    textTransform={"uppercase"}
                    fontSize="14px"
                  >
                    currency
                  </Text>
                  <Select placeholder="inr" textTransform={"uppercase"}>
                    <option value="AFN">AFN</option>
                    <option value="ALL">ALL</option>
                    <option value="DZD">DZD</option>
                    <option value="AOA">AOA</option>
                    <option value="ARS">ARS</option>
                    <option value="AMD">AMD</option>
                    <option value="AWG">AWG</option>
                    <option value="AUD">AUD</option>
                    <option value="AZN">AZN</option>
                    <option value="BSD">BSD</option>
                    <option value="BHD">BHD</option>
                    <option value="BDT">BDT</option>
                    <option value="BBD">BBD</option>
                    <option value="BYR">BYR</option>
                    <option value="BEF">BEF</option>
                    <option value="BZD">BZD</option>
                    <option value="BMD">BMD</option>
                    <option value="BTN">BTN</option>
                    <option value="BTC">BTC </option>
                    <option value="BOB">BOB</option>
                    <option value="BWP">BWP</option>
                    <option value="BRL">BRL</option>
                    <option value="GBP">GBP </option>
                    <option value="BND">BND</option>
                    <option value="BGN">BGN</option>
                    <option value="BIF">BIF</option>
                    <option value="KHR">KHR</option>
                    <option value="CAD">CAD</option>
                    <option value="CVE">CVE </option>
                    <option value="KYD">KYD </option>
                    <option value="XOF">XOF </option>
                    <option value="XAF">XAF </option>
                    <option value="XPF">XPF</option>
                    <option value="CLP">CLP</option>
                    <option value="CNY">CNY</option>
                    <option value="COP">COP</option>
                    <option value="KMF">KMF</option>
                    <option value="CDF">CDF</option>
                    <option value="CRC">CRC </option>
                    <option value="HRK">HRK</option>
                    <option value="CUC">CUC </option>
                    <option value="CZK">CZK </option>
                    <option value="DKK">DKK</option>
                    <option value="DJF">DJF</option>
                    <option value="DOP">DOP</option>
                    <option value="XCD">XCD </option>
                    <option value="EGP">EGP</option>
                    <option value="ERN">ERN</option>
                    <option value="EEK">EEK</option>
                    <option value="ETB">ETB</option>
                    <option value="EUR">EUR </option>
                    <option value="FKP">FKP </option>
                    <option value="FJD">FJD</option>
                    <option value="GMD">GMD</option>
                    <option value="GEL">GEL</option>
                    <option value="DEM">DEM</option>
                    <option value="GHS">GHS</option>
                    <option value="GIP">GIP</option>
                    <option value="GRD">GRD</option>
                    <option value="GTQ">GTQ</option>
                    <option value="GNF">GNF</option>
                    <option value="GYD">GYD</option>
                    <option value="HTG">HTG</option>
                    <option value="HNL">HNL</option>
                    <option value="HKD">HKD </option>
                    <option value="HUF">HUF</option>
                    <option value="ISK">ISK</option>
                    <option value="INR">INR</option>
                    <option value="IDR">IDR</option>
                    <option value="IRR">IRR</option>
                    <option value="IQD">IQD</option>
                    <option value="ILS">ILS </option>
                    <option value="ITL">ITL</option>
                    <option value="JMD">JMD</option>
                    <option value="JPY">JPY</option>
                    <option value="JOD">JOD</option>
                    <option value="KZT">KZT</option>
                    <option value="KES">KES</option>
                    <option value="KWD">KWD</option>
                    <option value="KGS">KGS</option>
                    <option value="LAK">LAK</option>
                    <option value="LVL">LVL</option>
                    <option value="LBP">LBP</option>
                    <option value="LSL">LSL</option>
                    <option value="LRD">LRD</option>
                    <option value="LYD">LYD</option>
                    <option value="LTL">LTL</option>
                    <option value="MOP">MOP</option>
                    <option value="MKD">MKD</option>
                    <option value="MGA">MGA</option>
                    <option value="MWK">MWK</option>
                    <option value="MYR">MYR</option>
                    <option value="MVR">MVR</option>
                    <option value="MRO">MRO</option>
                    <option value="MUR">MUR</option>
                    <option value="MXN">MXN</option>
                    <option value="MDL">MDL</option>
                    <option value="MNT">MNT</option>
                    <option value="MAD">MAD</option>
                    <option value="MZM">MZM</option>
                    <option value="MMK">MMK</option>
                    <option value="NAD">NAD</option>
                    <option value="NPR">NPR</option>
                    <option value="NIO">NIO</option>
                    <option value="NGN">NGN</option>
                    <option value="NOK">NOK</option>
                    <option value="OMR">OMR</option>
                    <option value="PKR">PKR</option>
                    <option value="PAB">PAB</option>
                    <option value="PYG">PYG</option>
                    <option value="PHP">PHP</option>
                    <option value="PLN">PLN</option>
                    <option value="QAR">QAR</option>
                    <option value="RON">RON</option>
                    <option value="RUB">RUB</option>
                    <option value="RWF">RWF</option>
                    <option value="SVC">SVC</option>
                    <option value="WST">WST</option>
                    <option value="SAR">SAR</option>
                    <option value="RSD">RSD</option>
                    <option value="SCR">SCR</option>
                    <option value="SGD">SGD</option>
                    <option value="SKK">SKK</option>
                    <option value="SOS">SOS</option>
                    <option value="SRD">SRD</option>
                    <option value="SZL">SZL</option>
                    <option value="SEK">SEK</option>
                    <option value="CHF">CHF</option>
                    <option value="SYP">SYP</option>
                    <option value="TJS">TJS</option>
                    <option value="TND">TND</option>
                    <option value="TRY">TRY</option>
                    <option value="TMT">TMT</option>
                    <option value="UGX">UGX</option>
                    <option value="UAH">UAH</option>
                  </Select>
                </Box>
              </HStack>
            </Box>

            <br />

            <Box w="80%" m="0px auto">
              <Button w="100%" colorScheme="green" borderRadius={0}>
                Create Free Account
              </Button>
            </Box>
            <Text
              my="20px"
              fontSize={"12px"}
              textAlign={"center"}
              color="#bbbbbb
"
            >
              Already have an account
            </Text>
            <Box w="80%" m="0px auto">
              <Button
                variant="outline"
                w="100%"
                colorScheme="green"
                borderRadius={0}
              >
                Login
              </Button>
            </Box>
            <br />
          </Box>
        </SimpleGrid>
      </Box>
      <Foot />
    </>
  );
};
