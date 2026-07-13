import re

file_path = "/Volumes/SSD/SLFFA-WEB 02/SLFFA WEB/src/pages/Tools.jsx"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Add imports at the top
old_imports = """import React from 'react';
import { HelpCircle, Calculator, FileText, Info } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';"""

new_imports = """import React from 'react';
import { HelpCircle, Calculator, FileText, Info } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import Editable from '../components/Editable';
import { useAdmin } from '../context/AdminContext';"""

content = content.replace(old_imports, new_imports)

# 2. Add definitionsData array and useAdmin context in Tools component
old_tools_def = """// Import image from the root images folder
import airwaybillImg from '../../images/Air Waybill.jpg';

const Tools = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], ['0%', '30%']);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);"""

new_tools_def = """// Import image from the root images folder
import airwaybillImg from '../../images/Air Waybill.jpg';

const definitionsData = [
  { key: 'authority', term: 'A) Authority:', desc: "A duly constituted legal or administrative person, acting within its legal powers and exercising jurisdiction within any nation, state, municipality, port or airport." },
  { key: 'carriage', term: 'B) Carriage:', desc: "Means the whole or any part of the operations and services of whatsoever nature undertaken by the Company in relation to the Goods including but not limited to the loading, unloading, storage, warehousing and handling of the goods." },
  { key: 'company', term: 'C) Company:', desc: "Means a member of Sri Lanka Logistics and Freight Forwarders' Association (SLFFA CS) who undertakes to provide the services." },
  { key: 'consignee', term: 'D) Consignee:', desc: "Means the person to whom the goods are consigned." },
  { key: 'container', term: 'E) Container:', desc: "Includes, unless otherwise indicated, any vehicle, container, flat pallet, trailer, transportable tank and similar items used for the consolidation of goods as well as mobile plant and timber packages." },
  { key: 'customer', term: 'F) Customer:', desc: "Means any person, whether themselves an agent or a principal, at whose request or on whose behalf the Company undertakes any business or provides advice, information or services." },
  { key: 'dangerous_goods', term: 'G) Dangerous Goods:', desc: "Includes goods that are or may become of a dangerous, noxious, hazardous, inflammable, radioactive or damaging nature, goods liable to taint or affect other goods and goods likely to harbor or encourage vermin or other pests." },
  { key: 'data_log', term: 'H) Data Log:', desc: "Means a complete and chronological record, automatically generated of all the messages sent and received by a party and maintained in accordance with general standards of usage." },
  { key: 'data_message', term: 'I) Data Message:', desc: "Means information generated, sent, received or stored by electronic, magnetic, optical or other similar means." },
  { key: 'edi', term: 'J) EDI:', desc: "Means the interchange of messages based on electronic data as approved for the presentation and structuring of the communication of messages by international standards (UNEDIFACT) and transmitted by electronic, optical or wireless means through the services provided by an approved provider network." },
  { key: 'electronic', term: 'K) Electronic:', desc: "Means information generated, sent, received or stored by electronic, magnetic, optical or similar capacities regardless of the medium." },
  { key: 'electronic_document', term: 'L) Electronic Document:', desc: "Includes documents, records, information, communications or transactions in electronic form." },
  { key: 'goods', term: 'M) Goods:', desc: "Includes the cargo and any container not supplied by or on behalf of the Company, in respect of which the Company provides a service." },
  { key: 'hague_visby', term: 'N) Hague Visby Rules:', desc: "Means the provisions of the International Convention for the Unification of certain rules relating to Bills of Lading signed at Brussels on 25th August 1924 as amended by the Visby Protocol of 1968." },
  { key: 'instructions', term: 'O) Instructions:', desc: "Means a statement of the customer's specific requirements." },
  { key: 'owner', term: 'P) Owner:', desc: "Includes the owner, shipper and consignee of the Goods and any other person who has or may have a legal or equitable relationship to the Goods at a relevant point of time and anyone acting on their behalf." },
  { key: 'person', term: 'Q) Person:', desc: "Includes persons or anybody or bodies corporate." },
  { key: 'sdr', term: 'R) SDR:', desc: "Means Special Drawing Rights as defined by the International Monetary Fund." },
  { key: 'services', term: 'S) Services:', desc: "Means any services to be provided within the scope of these conditions." }
];

const Tools = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], ['0%', '30%']);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);
  const { isEditMode, getContent } = useAdmin();"""

content = content.replace(old_tools_def, new_tools_def)

# 3. Wrap Hero titles
old_hero_text = """          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight max-w-4xl"
          >
            Tools & Guides
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-blue-100 max-w-3xl leading-relaxed font-light"
          >
          Explore our integrated tools, resources, and guides for cargo handling and calculations.
          </motion.p>"""

new_hero_text = """          <Editable id="tools.hero.title" defaultContent="Tools & Guides">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight max-w-4xl"
            >
              Tools & Guides
            </motion.h1>
          </Editable>

          <Editable id="tools.hero.description" type="textarea" defaultContent="Explore our integrated tools, resources, and guides for cargo handling and calculations.">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-blue-100 max-w-3xl leading-relaxed font-light"
            >
              Explore our integrated tools, resources, and guides for cargo handling and calculations.
            </motion.p>
          </Editable>"""

content = content.replace(old_hero_text, new_hero_text)

# 4. Process the Standard Trading Conditions section
start_marker = 'id="standard-trading"'
end_marker = '{/* Air WayBill Guide Section */}'

parts = content.split(start_marker)
if len(parts) < 2:
    print("Could not find start marker!")
    exit(1)

subparts = parts[1].split(end_marker)
if len(subparts) < 2:
    print("Could not find end marker!")
    exit(1)

stc_content = subparts[0]

h3_count = 0
h4_count = 0
p_count = 0
li_count = 0

def clean_for_id(text):
    text = re.sub(r'[^a-zA-Z0-9\s]', '', text)
    text = text.lower().strip()
    text = re.sub(r'\s+', '_', text)
    return text[:30]

def escape_attr(text):
    return text.replace('"', '&quot;')

def wrap_h3(match):
    global h3_count
    h3_count += 1
    attrs = match.group(1)
    text = match.group(2)
    cleaned = clean_for_id(text)
    escaped = escape_attr(text)
    return f'<Editable id="tools.stc.h3_{h3_count}_{cleaned}" defaultContent="{escaped}"><h3 {attrs}>{text}</h3></Editable>'

def wrap_h4(match):
    global h4_count
    h4_count += 1
    attrs = match.group(1)
    text = match.group(2)
    cleaned = clean_for_id(text)
    escaped = escape_attr(text)
    return f'<Editable id="tools.stc.h4_{h4_count}_{cleaned}" defaultContent="{escaped}"><h4 {attrs}>{text}</h4></Editable>'

def wrap_p(match):
    global p_count
    p_count += 1
    attrs = match.group(1)
    text = match.group(2).strip()
    if not text or text.startswith('<') or 'Editable' in text:
        return match.group(0)
    cleaned = clean_for_id(text)
    escaped = escape_attr(text)
    return f'<Editable id="tools.stc.p_{p_count}_{cleaned}" type="textarea" defaultContent="{escaped}"><p {attrs}>{text}</p></Editable>'

# Apply h3, h4, p wrappers
stc_content = re.sub(r'<h3([^>]*)>([^<]+)</h3>', wrap_h3, stc_content)
stc_content = re.sub(r'<h4([^>]*)>([^<]+)</h4>', wrap_h4, stc_content)
stc_content = re.sub(r'<p([^>]*)>([^<]+)</p>', wrap_p, stc_content)

# We want to replace the hardcoded definition block with definitionsData loop.
old_definitions_block = """                  <h4 className="text-lg font-bold text-blue-600 mb-3">Definitions</h4>
                  <div className="pl-4 space-y-3">
                    <p className="text-slate-800 font-medium">1. In these Conditions, the following expressions have the meanings hereby assigned to them:</p>
                    <ul className="space-y-3 pl-4 list-none">
                      <li>
                        <span className="text-blue-600 font-bold">A) Authority:</span> A duly constituted legal or administrative person, acting within its legal powers and exercising jurisdiction within any nation, state, municipality, port or airport.
                      </li>
                      <li>
                        <span className="text-blue-600 font-bold">B) Carriage:</span> Means the whole or any part of the operations and services of whatsoever nature undertaken by the Company in relation to the Goods including but not limited to the loading, unloading, storage, warehousing and handling of the goods.
                      </li>
                      <li>
                        <span className="text-blue-600 font-bold">C) Company:</span> Means a member of Sri Lanka Logistics and Freight Forwarders' Association (SLFFA CS) who undertakes to provide the services.
                      </li>
                      <li>
                        <span className="text-blue-600 font-bold">D) Consignee:</span> Means the person to whom the goods are consigned.
                      </li>
                      <li>
                        <span className="text-blue-600 font-bold">E) Container:</span> Includes, unless otherwise indicated, any vehicle, container, flat pallet, trailer, transportable tank and similar items used for the consolidation of goods as well as mobile plant and timber packages.
                      </li>
                      <li>
                        <span className="text-blue-600 font-bold">F) Customer:</span> Means any person, whether themselves an agent or a principal, at whose request or on whose behalf the Company undertakes any business or provides advice, information or services.
                      </li>
                      <li>
                        <span className="text-blue-600 font-bold">G) Dangerous Goods:</span> Includes goods that are or may become of a dangerous, noxious, hazardous, inflammable, radioactive or damaging nature, goods liable to taint or affect other goods and goods likely to harbor or encourage vermin or other pests.
                      </li>
                      <li>
                        <span className="text-blue-600 font-bold">H) Data Log:</span> Means a complete and chronological record, automatically generated of all the messages sent and received by a party and maintained in accordance with general standards of usage.
                      </li>
                      <li>
                        <span className="text-blue-600 font-bold">I) Data Message:</span> Means information generated, sent, received or stored by electronic, magnetic, optical or other similar means.
                      </li>
                      <li>
                        <span className="text-blue-600 font-bold">J) EDI:</span> Means the interchange of messages based on electronic data as approved for the presentation and structuring of the communication of messages by international standards (UNEDIFACT) and transmitted by electronic, optical or wireless means through the services provided by an approved provider network.
                      </li>
                      <li>
                        <span className="text-blue-600 font-bold">K) Electronic:</span> Means information generated, sent, received or stored by electronic, magnetic, optical or similar capacities regardless of the medium.
                      </li>
                      <li>
                        <span className="text-blue-600 font-bold">L) Electronic Document:</span> Includes documents, records, information, communications or transactions in electronic form.
                      </li>
                      <li>
                        <span className="text-blue-600 font-bold">M) Goods:</span> Includes the cargo and any container not supplied by or on behalf of the Company, in respect of which the Company provides a service.
                      </li>
                      <li>
                        <span className="text-blue-600 font-bold">N) Hague Visby Rules:</span> Means the provisions of the International Convention for the Unification of certain rules relating to Bills of Lading signed at Brussels on 25th August 1924 as amended by the Visby Protocol of 1968.
                      </li>
                      <li>
                        <span className="text-blue-600 font-bold">O) Instructions:</span> Means a statement of the customer's specific requirements.
                      </li>
                      <li>
                        <span className="text-blue-600 font-bold">P) Owner:</span> Includes the owner, shipper and consignee of the Goods and any other person who has or may have a legal or equitable relationship to the Goods at a relevant point of time and anyone acting on their behalf.
                      </li>
                      <li>
                        <span className="text-blue-600 font-bold">Q) Person:</span> Includes persons or anybody or bodies corporate.
                      </li>
                      <li>
                        <span className="text-blue-600 font-bold">R) SDR:</span> Means Special Drawing Rights as defined by the International Monetary Fund.
                      </li>
                      <li>
                        <span className="text-blue-600 font-bold">S) Services:</span> Means any services to be provided within the scope of these conditions.
                      </li>
                    </ul>
                  </div>"""

new_definitions_block = """                  <Editable id="tools.stc.definitions.header" defaultContent="Definitions">
                    <h4 className="text-lg font-bold text-blue-600 mb-3">Definitions</h4>
                  </Editable>
                  <div className="pl-4 space-y-3">
                    <Editable id="tools.stc.definitions.intro" defaultContent="1. In these Conditions, the following expressions have the meanings hereby assigned to them:">
                      <p className="text-slate-800 font-medium">1. In these Conditions, the following expressions have the meanings hereby assigned to them:</p>
                    </Editable>
                    <ul className="space-y-3 pl-4 list-none">
                      {definitionsData.map((def) => (
                        <li key={def.key}>
                          <span className="text-blue-600 font-bold">{def.term}</span>{' '}
                          <Editable id={`tools.stc.def.${def.key}`} defaultContent={def.desc}>
                            <span>{def.desc}</span>
                          </Editable>
                        </li>
                      ))}
                    </ul>
                  </div>"""

stc_content = stc_content.replace(old_definitions_block, new_definitions_block)

# Wrap the text content of the list items inside STC
def wrap_span_li(match):
    global li_count
    li_count += 1
    indent = match.group(1)
    span_part = match.group(2)
    text_content = match.group(3).strip()
    
    if not text_content or text_content.startswith('<') or 'Editable' in text_content:
        return match.group(0)
    
    cleaned = clean_for_id(text_content)
    escaped = escape_attr(text_content)
    return f'{indent}{span_part}<Editable id="tools.stc.li_{li_count}_{cleaned}" type="textarea" defaultContent="{escaped}"><span>{text_content}</span></Editable>'

# Apply wrapping to lists: eg. <span className="...">A)</span> Text here
stc_content = re.sub(
    r'(\n\s*)(<span className="[^"]+">(?:[A-Z]\)|[I-V]+\.|\d+\.)</span>\s*)([^\n<]+)',
    wrap_span_li,
    stc_content
)

content = parts[0] + start_marker + stc_content + end_marker + subparts[1]

# 5. Wrap Air Waybill Guide
old_awb_block = """            <div className="flex items-center gap-4 mb-10 border-b border-slate-200 pb-6">
              <FileText className="h-8 w-8 text-blue-600" />
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Air WayBill Guide</h2>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-16">
              
              {/* Q&A Text - Normal Text Format Without Boxes */}
              <div className="w-full lg:w-1/2 space-y-10">
                <motion.div variants={itemVariants}>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    What is an Air Waybill?
                  </h3>
                  <div className="w-12 h-1 bg-blue-600 rounded-full mb-4"></div>
                  <p className="text-lg text-slate-700 leading-relaxed">
                    It is the document made out by or on behalf of the shipper which evidences the contract between the shipper and carrier(s) for carriage of goods over routes of the carrier(s).
                  </p>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    What is the purpose of an Air Waybill?
                  </h3>
                  <div className="w-12 h-1 bg-blue-600 rounded-full mb-4"></div>
                  <ul className="list-disc list-outside text-lg text-slate-700 space-y-3 pl-6">
                    <li>Documentary evidence of the conclusion of the contract of carriage.</li>
                    <li>Proof of receipt of the goods of shipment.</li>
                    <li>Freight bill.</li>
                    <li>Certificate of insurance (if carriers insurance is requested by the shipper).</li>
                    <li>Guide to carriers staff in handling, dispatching and delivering the consignment.</li>
                  </ul>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    Who is responsible for the completion of the Air Waybill?
                  </h3>
                  <div className="w-12 h-1 bg-blue-600 rounded-full mb-4"></div>
                  <p className="text-lg text-slate-700 leading-relaxed">
                    The shipper is responsible for the correctness of the particulars and statements relating to the goods which he inserts in the Air Waybill or which are inserted on his behalf.
                  </p>
                </motion.div>
              </div>

              {/* Image Section */}
              <div className="w-full lg:w-1/2">
                <motion.div variants={itemVariants} className="sticky top-24">
                  <span className="text-blue-600 font-bold text-sm uppercase tracking-widest block mb-2">Visual Example</span>
                  <h3 className="text-3xl font-bold text-slate-900 mb-6">
                    What does an Air Waybill look like?
                  </h3>
                  <div className="w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
                      <img 
                        src={airwaybillImg}
                        alt="Air Waybill Sample" 
                        className="w-full h-auto object-contain bg-white"
                      />
                  </div>
                </motion.div>
              </div>
            </div>"""

new_awb_block = """            <div className="flex items-center gap-4 mb-10 border-b border-slate-200 pb-6">
              <FileText className="h-8 w-8 text-blue-600" />
              <Editable id="tools.awb.title" defaultContent="Air WayBill Guide">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Air WayBill Guide</h2>
              </Editable>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-16">
              
              {/* Q&A Text - Normal Text Format Without Boxes */}
              <div className="w-full lg:w-1/2 space-y-10">
                <motion.div variants={itemVariants}>
                  <Editable id="tools.awb.q1.title" defaultContent="What is an Air Waybill?">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                      What is an Air Waybill?
                    </h3>
                  </Editable>
                  <div className="w-12 h-1 bg-blue-600 rounded-full mb-4"></div>
                  <Editable id="tools.awb.q1.answer" type="textarea" defaultContent="It is the document made out by or on behalf of the shipper which evidences the contract between the shipper and carrier(s) for carriage of goods over routes of the carrier(s).">
                    <p className="text-lg text-slate-700 leading-relaxed">
                      It is the document made out by or on behalf of the shipper which evidences the contract between the shipper and carrier(s) for carriage of goods over routes of the carrier(s).
                    </p>
                  </Editable>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Editable id="tools.awb.q2.title" defaultContent="What is the purpose of an Air Waybill?">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                      What is the purpose of an Air Waybill?
                    </h3>
                  </Editable>
                  <div className="w-12 h-1 bg-blue-600 rounded-full mb-4"></div>
                  <ul className="list-disc list-outside text-lg text-slate-700 space-y-3 pl-6">
                    <li>
                      <Editable id="tools.awb.q2.a1" defaultContent="Documentary evidence of the conclusion of the contract of carriage.">
                        <span>Documentary evidence of the conclusion of the contract of carriage.</span>
                      </Editable>
                    </li>
                    <li>
                      <Editable id="tools.awb.q2.a2" defaultContent="Proof of receipt of the goods of shipment.">
                        <span>Proof of receipt of the goods of shipment.</span>
                      </Editable>
                    </li>
                    <li>
                      <Editable id="tools.awb.q2.a3" defaultContent="Freight bill.">
                        <span>Freight bill.</span>
                      </Editable>
                    </li>
                    <li>
                      <Editable id="tools.awb.q2.a4" defaultContent="Certificate of insurance (if carriers insurance is requested by the shipper).">
                        <span>Certificate of insurance (if carriers insurance is requested by the shipper).</span>
                      </Editable>
                    </li>
                    <li>
                      <Editable id="tools.awb.q2.a5" defaultContent="Guide to carriers staff in handling, dispatching and delivering the consignment.">
                        <span>Guide to carriers staff in handling, dispatching and delivering the consignment.</span>
                      </Editable>
                    </li>
                  </ul>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Editable id="tools.awb.q3.title" defaultContent="Who is responsible for the completion of the Air Waybill?">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">
                      Who is responsible for the completion of the Air Waybill?
                    </h3>
                  </Editable>
                  <div className="w-12 h-1 bg-blue-600 rounded-full mb-4"></div>
                  <Editable id="tools.awb.q3.answer" type="textarea" defaultContent="The shipper is responsible for the correctness of the particulars and statements relating to the goods which he inserts in the Air Waybill or which are inserted on his behalf.">
                    <p className="text-lg text-slate-700 leading-relaxed">
                      The shipper is responsible for the correctness of the particulars and statements relating to the goods which he inserts in the Air Waybill or which are inserted on his behalf.
                    </p>
                  </Editable>
                </motion.div>
              </div>

              {/* Image Section */}
              <div className="w-full lg:w-1/2">
                <motion.div variants={itemVariants} className="sticky top-24">
                  <Editable id="tools.awb.image.badge" defaultContent="Visual Example">
                    <span className="text-blue-600 font-bold text-sm uppercase tracking-widest block mb-2">Visual Example</span>
                  </Editable>
                  <Editable id="tools.awb.image.title" defaultContent="What does an Air Waybill look like?">
                    <h3 className="text-3xl font-bold text-slate-900 mb-6">
                      What does an Air Waybill look like?
                    </h3>
                  </Editable>
                  <div className="w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
                    <Editable id="tools.awb.image" type="image" defaultContent={airwaybillImg}>
                      <img 
                        src={airwaybillImg}
                        alt="Air Waybill Sample" 
                        className="w-full h-auto object-contain bg-white"
                      />
                    </Editable>
                  </div>
                </motion.div>
              </div>
            </div>"""

content = content.replace(old_awb_block, new_awb_block)

# 6. Wrap Volumetric Weight
old_vol_block = """            <div className="flex items-center gap-4 mb-6">
              <Calculator className="h-8 w-8 text-blue-600" />
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Volumetric Weight</h2>
            </div>
            
            <motion.p variants={itemVariants} className="text-lg text-slate-700 mb-12 max-w-4xl leading-relaxed">
              Large items, light in weight are usually charged according to the space they take up on an aircraft. Shipment cost for such items/consignments are calculated by their volumetric weight, or dimensional weight. The formula below is used for calculating volumetric weights.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Calculation 1 */}
              <motion.div variants={itemVariants} whileHover={{ y: -5 }} className="bg-white rounded-3xl p-8 shadow-md border border-slate-200 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-blue-600"></div>
                  <div className="bg-blue-50 text-blue-700 font-bold px-4 py-2 rounded-xl inline-block mb-6 text-sm tracking-wide">
                    1 / Commodity – C1024
                  </div>
                  <div className="bg-slate-50 rounded-2xl p-6 text-center font-mono text-slate-700 mb-6 border border-slate-100 text-lg shadow-inner">
                    <div className="border-b border-slate-300 pb-3 mb-3 font-medium">47 × 41 × 37 × 80</div>
                    <div className="font-medium text-slate-500">7000</div>
                  </div>
                  <div className="text-center font-bold text-4xl text-blue-600 mb-3">= 815 <span className="text-xl text-blue-500">kg</span></div>
                  <p className="text-sm text-slate-500 text-center bg-slate-50 py-2 rounded-lg mt-4">
                    Dimensions: (47x41x37)cm | 80 pcs
                  </p>
              </motion.div>

              {/* Calculation 2 */}
              <motion.div variants={itemVariants} whileHover={{ y: -5 }} className="bg-white rounded-3xl p-8 shadow-md border border-slate-200 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-400 to-emerald-600"></div>
                  <div className="bg-emerald-50 text-emerald-700 font-bold px-4 py-2 rounded-xl inline-block mb-6 text-sm tracking-wide">
                    2 / Commodity – C1401
                  </div>
                  <div className="bg-slate-50 rounded-2xl p-6 text-center font-mono text-slate-700 mb-6 border border-slate-100 text-lg shadow-inner">
                    <div className="border-b border-slate-300 pb-3 mb-3 font-medium">100 × 45 × 40 × 56</div>
                    <div className="font-medium text-slate-500">7000</div>
                  </div>
                  <div className="text-center font-bold text-4xl text-emerald-600 mb-3">= 1440.0 <span className="text-xl text-emerald-500">kg</span></div>
                  <p className="text-sm text-slate-500 text-center bg-slate-50 py-2 rounded-lg mt-4">
                    Dimensions: (100x45x40)cm | 56 pcs
                  </p>
              </motion.div>

              {/* Calculation 3 */}
              <motion.div variants={itemVariants} whileHover={{ y: -5 }} className="bg-white rounded-3xl p-8 shadow-md border border-slate-200 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-400 to-amber-600"></div>
                  <div className="bg-amber-50 text-amber-700 font-bold px-4 py-2 rounded-xl inline-block mb-6 text-sm tracking-wide">
                    3 / All Other Cargo
                  </div>
                  <div className="bg-slate-50 rounded-2xl p-6 text-center font-mono text-slate-700 mb-6 border border-slate-100 text-lg shadow-inner">
                    <div className="border-b border-slate-300 pb-3 mb-3 font-medium">60 × 42 × 37 × 60</div>
                    <div className="font-medium text-slate-500">6000</div>
                  </div>
                  <div className="text-center font-bold text-4xl text-amber-600 mb-3">= 932.5 <span className="text-xl text-amber-500">kg</span></div>
                  <p className="text-sm text-slate-500 text-center bg-slate-50 py-2 rounded-lg mt-4">
                    Dimensions: (60x42x37)cm | 60 pcs
                  </p>
              </motion.div>
            </div>

            {/* Commodity Legend */}
            <motion.div variants={itemVariants} className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm max-w-3xl flex flex-col sm:flex-row items-center gap-6 sm:gap-12">
              <h4 className="font-bold text-slate-900 flex items-center gap-2 m-0 whitespace-nowrap">
                <Info className="h-5 w-5 text-blue-500" /> Commodity Codes
              </h4>
              <div className="flex flex-col sm:flex-row gap-6 text-slate-700 w-full">
                <div className="flex items-center gap-3 bg-slate-50 px-4 py-2 rounded-lg flex-1">
                  <span className="w-4 h-4 rounded-full bg-blue-500 shadow-sm"></span>
                  <div>
                    <span className="font-bold text-slate-900">C1024</span> – Live fish
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-slate-50 px-4 py-2 rounded-lg flex-1">
                  <span className="w-4 h-4 rounded-full bg-emerald-500 shadow-sm"></span>
                  <div>
                    <span className="font-bold text-slate-900">C1401</span> – Cut foliage and live plants
                  </div>
                </div>
              </div>
            </motion.div>"""

new_vol_block = """            <div className="flex items-center gap-4 mb-6">
              <Calculator className="h-8 w-8 text-blue-600" />
              <Editable id="tools.volumetric.title" defaultContent="Volumetric Weight">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Volumetric Weight</h2>
              </Editable>
            </div>
            
            <Editable id="tools.volumetric.description" type="textarea" defaultContent="Large items, light in weight are usually charged according to the space they take up on an aircraft. Shipment cost for such items/consignments are calculated by their volumetric weight, or dimensional weight. The formula below is used for calculating volumetric weights.">
              <motion.p variants={itemVariants} className="text-lg text-slate-700 mb-12 max-w-4xl leading-relaxed">
                Large items, light in weight are usually charged according to the space they take up on an aircraft. Shipment cost for such items/consignments are calculated by their volumetric weight, or dimensional weight. The formula below is used for calculating volumetric weights.
              </motion.p>
            </Editable>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Calculation 1 */}
              <motion.div variants={itemVariants} whileHover={{ y: -5 }} className="bg-white rounded-3xl p-8 shadow-md border border-slate-200 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-blue-600"></div>
                  <Editable id="tools.volumetric.card1.commodity" defaultContent="1 / Commodity – C1024">
                    <div className="bg-blue-50 text-blue-700 font-bold px-4 py-2 rounded-xl inline-block mb-6 text-sm tracking-wide">
                      1 / Commodity – C1024
                    </div>
                  </Editable>
                  <div className="bg-slate-50 rounded-2xl p-6 text-center font-mono text-slate-700 mb-6 border border-slate-100 text-lg shadow-inner">
                    <Editable id="tools.volumetric.card1.formula" defaultContent="47 × 41 × 37 × 80">
                      <div className="border-b border-slate-300 pb-3 mb-3 font-medium">47 × 41 × 37 × 80</div>
                    </Editable>
                    <Editable id="tools.volumetric.card1.divisor" defaultContent="7000">
                      <div className="font-medium text-slate-500">7000</div>
                    </Editable>
                  </div>
                  <div className="text-center font-bold text-4xl text-blue-600 mb-3">
                    <Editable id="tools.volumetric.card1.result" defaultContent="= 815">
                      <span>= 815</span>
                    </Editable>{' '}
                    <span className="text-xl text-blue-500">kg</span>
                  </div>
                  <Editable id="tools.volumetric.card1.dimensions" defaultContent="Dimensions: (47x41x37)cm | 80 pcs">
                    <p className="text-sm text-slate-500 text-center bg-slate-50 py-2 rounded-lg mt-4">
                      Dimensions: (47x41x37)cm | 80 pcs
                    </p>
                  </Editable>
              </motion.div>

              {/* Calculation 2 */}
              <motion.div variants={itemVariants} whileHover={{ y: -5 }} className="bg-white rounded-3xl p-8 shadow-md border border-slate-200 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-400 to-emerald-600"></div>
                  <Editable id="tools.volumetric.card2.commodity" defaultContent="2 / Commodity – C1401">
                    <div className="bg-emerald-50 text-emerald-700 font-bold px-4 py-2 rounded-xl inline-block mb-6 text-sm tracking-wide">
                      2 / Commodity – C1401
                    </div>
                  </Editable>
                  <div className="bg-slate-50 rounded-2xl p-6 text-center font-mono text-slate-700 mb-6 border border-slate-100 text-lg shadow-inner">
                    <Editable id="tools.volumetric.card2.formula" defaultContent="100 × 45 × 40 × 56">
                      <div className="border-b border-slate-300 pb-3 mb-3 font-medium">100 × 45 × 40 × 56</div>
                    </Editable>
                    <Editable id="tools.volumetric.card2.divisor" defaultContent="7000">
                      <div className="font-medium text-slate-500">7000</div>
                    </Editable>
                  </div>
                  <div className="text-center font-bold text-4xl text-emerald-600 mb-3">
                    <Editable id="tools.volumetric.card2.result" defaultContent="= 1440.0">
                      <span>= 1440.0</span>
                    </Editable>{' '}
                    <span className="text-xl text-emerald-500">kg</span>
                  </div>
                  <Editable id="tools.volumetric.card2.dimensions" defaultContent="Dimensions: (100x45x40)cm | 56 pcs">
                    <p className="text-sm text-slate-500 text-center bg-slate-50 py-2 rounded-lg mt-4">
                      Dimensions: (100x45x40)cm | 56 pcs
                    </p>
                  </Editable>
              </motion.div>

              {/* Calculation 3 */}
              <motion.div variants={itemVariants} whileHover={{ y: -5 }} className="bg-white rounded-3xl p-8 shadow-md border border-slate-200 hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-400 to-amber-600"></div>
                  <Editable id="tools.volumetric.card3.commodity" defaultContent="3 / All Other Cargo">
                    <div className="bg-amber-50 text-amber-700 font-bold px-4 py-2 rounded-xl inline-block mb-6 text-sm tracking-wide">
                      3 / All Other Cargo
                    </div>
                  </Editable>
                  <div className="bg-slate-50 rounded-2xl p-6 text-center font-mono text-slate-700 mb-6 border border-slate-100 text-lg shadow-inner">
                    <Editable id="tools.volumetric.card3.formula" defaultContent="60 × 42 × 37 × 60">
                      <div className="border-b border-slate-300 pb-3 mb-3 font-medium">60 × 42 × 37 × 60</div>
                    </Editable>
                    <Editable id="tools.volumetric.card3.divisor" defaultContent="6000">
                      <div className="font-medium text-slate-500">6000</div>
                    </Editable>
                  </div>
                  <div className="text-center font-bold text-4xl text-amber-600 mb-3">
                    <Editable id="tools.volumetric.card3.result" defaultContent="= 932.5">
                      <span>= 932.5</span>
                    </Editable>{' '}
                    <span className="text-xl text-amber-500">kg</span>
                  </div>
                  <Editable id="tools.volumetric.card3.dimensions" defaultContent="Dimensions: (60x42x37)cm | 60 pcs">
                    <p className="text-sm text-slate-500 text-center bg-slate-50 py-2 rounded-lg mt-4">
                      Dimensions: (60x42x37)cm | 60 pcs
                    </p>
                  </Editable>
              </motion.div>
            </div>

            {/* Commodity Legend */}
            <motion.div variants={itemVariants} className="bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm max-w-3xl flex flex-col sm:flex-row items-center gap-6 sm:gap-12">
              <Editable id="tools.volumetric.legend.title" defaultContent="Commodity Codes">
                <h4 className="font-bold text-slate-900 flex items-center gap-2 m-0 whitespace-nowrap">
                  <Info className="h-5 w-5 text-blue-500" /> Commodity Codes
                </h4>
              </Editable>
              <div className="flex flex-col sm:flex-row gap-6 text-slate-700 w-full">
                <div className="flex items-center gap-3 bg-slate-50 px-4 py-2 rounded-lg flex-1">
                  <span className="w-4 h-4 rounded-full bg-blue-500 shadow-sm"></span>
                  <div>
                    <span className="font-bold text-slate-900">C1024</span>{' '}
                    <Editable id="tools.volumetric.legend.c1024" defaultContent="– Live fish">
                      <span>– Live fish</span>
                    </Editable>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-slate-50 px-4 py-2 rounded-lg flex-1">
                  <span className="w-4 h-4 rounded-full bg-emerald-500 shadow-sm"></span>
                  <div>
                    <span className="font-bold text-slate-900">C1401</span>{' '}
                    <Editable id="tools.volumetric.legend.c1401" defaultContent="– Cut foliage and live plants">
                      <span>– Cut foliage and live plants</span>
                    </Editable>
                  </div>
                </div>
              </div>
            </motion.div>"""

content = content.replace(old_vol_block, new_vol_block)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print(f"Processed entire Tools.jsx. Wrapped {h3_count} h3s, {h4_count} h4s, {p_count} ps, {li_count} list items.")
