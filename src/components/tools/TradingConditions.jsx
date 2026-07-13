"use client";

import React from 'react';
import { FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import Editable from '../Editable';
import { definitionsData } from '../../data/toolsData';

export default function TradingConditions({ containerVariants, itemVariants }) {
  return (
    <motion.div 
      id="standard-trading"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="mb-24"
    >
      <motion.div variants={itemVariants} className="flex flex-col items-center text-center mb-10 border-b border-slate-200 dark:border-slate-800 pb-8 max-w-5xl mx-auto">
        <img src="/api/imageProxy?id=1d1z1Z0IMS6m0bu0Vqiyth92-Q0ezsPB0" alt="SLFFA CS Logo" className="h-28 w-auto mb-6 object-contain" />
        <Editable id="tools.stc.subtitle" defaultContent="Sri Lanka Logistics and Freight Forwarders' Association (SLFFA CS)">
          <h2 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-200 tracking-wide uppercase">
            Sri Lanka Logistics and Freight Forwarders' Association (SLFFA CS)
          </h2>
        </Editable>
        <Editable id="tools.stc.title" defaultContent="Standard Trading Conditions">
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-600 dark:text-blue-400 mt-2">
            Standard Trading Conditions
          </h1>
        </Editable>
      </motion.div>
      
      <div className="text-slate-700 dark:text-slate-300 leading-relaxed space-y-8 text-sm md:text-base max-w-5xl mx-auto">
        
        <motion.div variants={itemVariants} className="space-y-6">
          <Editable id="tools.stc.part1.title" defaultContent="Part I: General Conditions">
            <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mt-6 mb-4 border-b border-blue-100 dark:border-blue-900/40 pb-2">
              Part I: General Conditions
            </h3>
          </Editable>
          
          <div className="space-y-6">
            <div>
              <Editable id="tools.stc.definitions.header" defaultContent="Definitions">
                <h4 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-3">Definitions</h4>
              </Editable>
              <div className="pl-4 space-y-3">
                <Editable id="tools.stc.definitions.intro" defaultContent="1. In these Conditions, the following expressions have the meanings hereby assigned to them:">
                  <p className="text-slate-805 dark:text-slate-300 font-medium">1. In these Conditions, the following expressions have the meanings hereby assigned to them:</p>
                </Editable>
                <ul className="space-y-3 pl-4 list-none">
                  {definitionsData.map((def) => (
                    <li key={def.key}>
                      <span className="text-blue-600 dark:text-blue-400 font-bold">{def.term}</span>{' '}
                      <Editable id={`tools.stc.def.${def.key}`} defaultContent={def.desc}>
                        <span>{def.desc}</span>
                      </Editable>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
              <Editable id="tools.stc.clause2.title" defaultContent="2. Scope and Applicability">
                <h4 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-3">2. Scope and Applicability</h4>
              </Editable>
              <ul className="space-y-3 pl-8 list-none">
                <li>
                  <span className="text-slate-900 dark:text-white font-bold">A)</span>{' '}
                  <Editable id="tools.stc.clause2.a" type="textarea" defaultContent="Subject to sub-paragraph (B) below, all and any activities of the Company in the course of business, whether gratuitous or not, are undertaken subject to these conditions.">
                    <span>Subject to sub-paragraph (B) below, all and any activities of the Company in the course of business, whether gratuitous or not, are undertaken subject to these conditions.</span>
                  </Editable>
                  <ul className="space-y-2 pl-6 mt-2 list-none">
                    <li>
                      <span className="text-slate-800 dark:text-slate-200 font-semibold">I.</span>{' '}
                      <Editable id="tools.stc.clause2.a.i" defaultContent="The provisions of Part I shall apply to all such services and activities.">
                        <span>The provisions of Part I shall apply to all such services and activities.</span>
                      </Editable>
                    </li>
                    <li>
                      <span className="text-slate-800 dark:text-slate-200 font-semibold">II.</span>{' '}
                      <Editable id="tools.stc.clause2.a.ii" defaultContent="The provisions of Part II shall only apply to the extent that the Company provides such services and activities as agents.">
                        <span>The provisions of Part II shall only apply to the extent that the Company provides such services and activities as agents.</span>
                      </Editable>
                    </li>
                    <li>
                      <span className="text-slate-800 dark:text-slate-200 font-semibold">III.</span>{' '}
                      <Editable id="tools.stc.clause2.a.iii" defaultContent="The provisions of Part III shall only apply to the extent that the Company provides such services and activities as principals.">
                        <span>The provisions of Part III shall only apply to the extent that the Company provides such services and activities as principals.</span>
                      </Editable>
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="text-slate-900 dark:text-white font-bold">B)</span>{' '}
                  <Editable id="tools.stc.clause2.b" type="textarea" defaultContent="If any legislation, to include regulations and directives, is compulsorily applicable to any business undertaken, these conditions shall, as regards such business, be read as subject to such legislation, and nothing in these conditions shall be construed as a surrender by the Company of any of its rights or immunities or as an increase of any of its responsibilities or liabilities under such legislation, and if any part of these conditions be repugnant to such legislation to any extent, such part shall as regards such business be overridden to that extent and no further.">
                    <span>If any legislation, to include regulations and directives, is compulsorily applicable to any business undertaken, these conditions shall, as regards such business, be read as subject to such legislation, and nothing in these conditions shall be construed as a surrender by the Company of any of its rights or immunities or as an increase of any of its responsibilities or liabilities under such legislation, and if any part of these conditions be repugnant to such legislation to any extent, such part shall as regards such business be overridden to that extent and no further.</span>
                  </Editable>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
              <Editable id="tools.stc.clause3.title" defaultContent="3. Company Role (Agent vs. Principal)">
                <h4 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-3">3. Company Role (Agent vs. Principal)</h4>
              </Editable>
              <Editable id="tools.stc.clause3.intro" type="textarea" defaultContent="All services and activities are provided by the Company as agents except in the following circumstances where the Company acts as principal:">
                <p className="text-slate-800 dark:text-slate-200 font-medium pl-4 mb-2">All services and activities are provided by the Company as agents except in the following circumstances where the Company acts as principal:</p>
              </Editable>
              <ul className="space-y-2.5 pl-8 list-none">
                <li>
                  <span className="text-blue-600 dark:text-blue-400 font-bold">A)</span>{' '}
                  <Editable id="tools.stc.clause3.a" type="textarea" defaultContent="Where the Company performs any carriage, handling or storage of Goods but only to the extent that the carriage is performed by the Company itself or its servants and the Goods are in the actual custody and control of the Company, or">
                    <span>Where the Company performs any carriage, handling or storage of Goods but only to the extent that the carriage is performed by the Company itself or its servants and the Goods are in the actual custody and control of the Company, or</span>
                  </Editable>
                </li>
                <li>
                  <span className="text-blue-600 dark:text-blue-400 font-bold">B)</span>{' '}
                  <Editable id="tools.stc.clause3.b" type="textarea" defaultContent="To the extent that the Company expressly agrees in writing to act as a principal, or">
                    <span>To the extent that the Company expressly agrees in writing to act as a principal, or</span>
                  </Editable>
                </li>
                <li>
                  <span className="text-blue-600 dark:text-blue-400 font-bold">C)</span>{' '}
                  <Editable id="tools.stc.clause3.c" type="textarea" defaultContent="To the extent that the Company is held by a court of law to have acted as a principal.">
                    <span>To the extent that the Company is held by a court of law to have acted as a principal.</span>
                  </Editable>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
              <Editable id="tools.stc.clause4.title" defaultContent="4. Status Determination and Quotations">
                <h4 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-3">4. Status Determination and Quotations</h4>
              </Editable>
              <Editable id="tools.stc.clause4.intro" defaultContent="Without prejudice to the generality of Clause 3:">
                <p className="text-slate-800 dark:text-slate-200 font-medium pl-4 mb-2">Without prejudice to the generality of Clause 3:</p>
              </Editable>
              <ul className="space-y-3.5 pl-8 list-none">
                <li>
                  <span className="text-blue-600 dark:text-blue-400 font-bold">A)</span>{' '}
                  <Editable id="tools.stc.clause4.a" type="textarea" defaultContent="The charging by the Company of a fixed price for a service or services of whatsoever nature shall not in itself determine or be evidence that the Company is acting as an agent or a principal in respect of such service or services;">
                    <span>The charging by the Company of a fixed price for a service or services of whatsoever nature shall not in itself determine or be evidence that the Company is acting as an agent or a principal in respect of such service or services;</span>
                  </Editable>
                </li>
                <li>
                  <span className="text-blue-600 dark:text-blue-400 font-bold">B)</span>{' '}
                  <Editable id="tools.stc.clause4.b" type="textarea" defaultContent="The supplying by the Company of their own or leased equipment shall not in itself determine or be evidence that the Company is acting as an agent or a principal in respect of any carriage, handling or storage of Goods;">
                    <span>The supplying by the Company of their own or leased equipment shall not in itself determine or be evidence that the Company is acting as an agent or a principal in respect of any carriage, handling or storage of Goods;</span>
                  </Editable>
                </li>
                <li>
                  <span className="text-blue-600 dark:text-blue-400 font-bold">C)</span>{' '}
                  <Editable id="tools.stc.clause4.c" type="textarea" defaultContent="The Company acts as an agent where the Company procures a bill of lading or other document evidencing a contract of carriage between a person, other than the Company, and the Customer or Owner;">
                    <span>The Company acts as an agent where the Company procures a bill of lading or other document evidencing a contract of carriage between a person, other than the Company, and the Customer or Owner;</span>
                  </Editable>
                </li>
                <li>
                  <span className="text-blue-600 dark:text-blue-400 font-bold">D)</span>{' '}
                  <Editable id="tools.stc.clause4.d" type="textarea" defaultContent="The Company acts as an agent and never as a principal when providing services in respect of or relating to customs requirements, taxes, licenses, consular documents, certificates of origin, inspection certificates and other similar services;">
                    <span>The Company acts as an agent and never as a principal when providing services in respect of or relating to customs requirements, taxes, licenses, consular documents, certificates of origin, inspection certificates and other similar services;</span>
                  </Editable>
                </li>
                <li>
                  <span className="text-blue-600 dark:text-blue-400 font-bold">E)</span>{' '}
                  <Editable id="tools.stc.clause4.e" type="textarea" defaultContent="Quotations are given on the basis of immediate acceptance and are subject to the right of withdrawal or revision. If any changes occur in the rates of freight, insurance premiums or other charges applicable to the goods, quotations and charges shall be subject to revision accordingly with or without notice.">
                    <span>Quotations are given on the basis of immediate acceptance and are subject to the right of withdrawal or revision. If any changes occur in the rates of freight, insurance premiums or other charges applicable to the goods, quotations and charges shall be subject to revision accordingly with or without notice.</span>
                  </Editable>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-6">
          <Editable id="tools.stc.obligations.title" defaultContent="Obligations of Customer">
            <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mt-12 mb-4 border-b border-blue-100 dark:border-blue-900/40 pb-2">
              Obligations of Customer
            </h3>
          </Editable>

          <div className="space-y-6">
            <div>
              <Editable id="tools.stc.clause5.title" defaultContent="5. Customer Warranties">
                <h4 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-3">5. Customer Warranties</h4>
              </Editable>
              <Editable id="tools.stc.clause5.intro" defaultContent="The Customer warrants:">
                <p className="text-slate-800 dark:text-slate-200 font-medium pl-4 mb-2">The Customer warrants:</p>
              </Editable>
              <ul className="space-y-4 pl-8 list-none">
                <li>
                  <span className="text-blue-600 dark:text-blue-400 font-bold">A)</span>{' '}
                  <Editable id="tools.stc.clause5.a" type="textarea" defaultContent="That he is either the owner or the authorized agent of the Owner of the Goods and that he is authorized to accept and is accepting these Conditions not only for himself but also as agent for and on behalf of the owner of the Goods.">
                    <span>That he is either the owner or the authorized agent of the Owner of the Goods and that he is authorized to accept and is accepting these Conditions not only for himself but also as agent for and on behalf of the owner of the Goods.</span>
                  </Editable>
                </li>
                <li>
                  <span className="text-blue-600 dark:text-blue-400 font-bold">B)</span>{' '}
                  <Editable id="tools.stc.clause5.b.title" defaultContent="Detailed operational warranties:">
                    <span className="font-semibold text-slate-800 dark:text-slate-200">Detailed operational warranties:</span>
                  </Editable>
                  <ul className="space-y-2.5 pl-6 mt-2 list-none">
                    <li>
                      <span className="text-slate-805 dark:text-slate-300 font-semibold">I.</span>{' '}
                      <Editable id="tools.stc.clause5.b.i" type="textarea" defaultContent="That he has reasonable knowledge of matters affecting the conduct of his business, including but not limited to the terms of sale and purchase of the Goods and all other matters relating thereto.">
                        <span>That he has reasonable knowledge of matters affecting the conduct of his business, including but not limited to the terms of sale and purchase of the Goods and all other matters relating thereto.</span>
                      </Editable>
                    </li>
                    <li>
                      <span className="text-slate-805 dark:text-slate-300 font-semibold">II.</span>{' '}
                      <Editable id="tools.stc.clause5.b.ii" type="textarea" defaultContent="That the description and particulars of any Goods or information furnished, or services required, are complete and accurate and provided in full at the time of handing over the goods or requiring such services and in the event of any change of such instructions, information provided, that such change be made with adequate notice to enable the carrier to perform and discharge his duties.">
                        <span>That the description and particulars of any Goods or information furnished, or services required, are complete and accurate and provided in full at the time of handing over the goods or requiring such services and in the event of any change of such instructions, information provided, that such change be made with adequate notice to enable the carrier to perform and discharge his duties.</span>
                      </Editable>
                    </li>
                    <li>
                      <span className="text-slate-805 dark:text-slate-300 font-semibold">III.</span>{' '}
                      <Editable id="tools.stc.clause5.b.iii" type="textarea" defaultContent="The instructions given by him are sufficient and executable and subject to Clause (II) above given with adequate notice as may be required by the carrier in terms of the various carriage or services to be performed.">
                        <span>The instructions given by him are sufficient and executable and subject to Clause (II) above given with adequate notice as may be required by the carrier in terms of the various carriage or services to be performed.</span>
                      </Editable>
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="text-blue-600 dark:text-blue-400 font-bold">C)</span>{' '}
                  <Editable id="tools.stc.clause5.c" type="textarea" defaultContent="That the Goods are properly packed, marked, labeled and stowed in a manner appropriate to any operations or transactions affecting the Goods and the characteristics of the Goods except where the Company has accepted instructions in respect of such services.">
                    <span>That the Goods are properly packed, marked, labeled and stowed in a manner appropriate to any operations or transactions affecting the Goods and the characteristics of the Goods except where the Company has accepted instructions in respect of such services.</span>
                  </Editable>
                </li>
                <li>
                  <span className="text-blue-600 dark:text-blue-400 font-bold">D)</span>{' '}
                  <Editable id="tools.stc.clause5.d" type="textarea" defaultContent="That any transport unit/equipment supplied by the Customer in relation to the performance of any requested service is in good condition, fit for the purpose and is suitable for the carriage to the intended destination of the Goods loaded therein or thereon.">
                    <span>That any transport unit/equipment supplied by the Customer in relation to the performance of any requested service is in good condition, fit for the purpose and is suitable for the carriage to the intended destination of the Goods loaded therein or thereon.</span>
                  </Editable>
                </li>
                <li>
                  <span className="text-blue-600 dark:text-blue-400 font-bold">E)</span>{' '}
                  <Editable id="tools.stc.clause5.e" type="textarea" defaultContent="That where the Company provides the transport unit, on loading by the Customer, the transport unit is in good condition, and is suitable for the carriage to the intended destination of the goods loaded therein or thereon.">
                    <span>That where the Company provides the transport unit, on loading by the Customer, the transport unit is in good condition, and is suitable for the carriage to the intended destination of the goods loaded therein or thereon.</span>
                  </Editable>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-6">
          <Editable id="tools.stc.special.title" defaultContent="Special Instructions, Goods and Services">
            <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mt-12 mb-4 border-b border-blue-100 dark:border-blue-900/40 pb-2">
              Special Instructions, Goods and Services
            </h3>
          </Editable>

          <div className="space-y-6">
            <div>
              <Editable id="tools.stc.clause6.title" defaultContent="6. Dangerous, Damageable and Special Goods">
                <h4 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-3">6. Dangerous, Damageable and Special Goods</h4>
              </Editable>
              <Editable id="tools.stc.clause6.intro" type="textarea" defaultContent="Unless otherwise previously agreed in writing, the Customer shall not deliver to the Company or cause the Company to deal with or handle Goods of a dangerous or damaging nature, nor Goods likely to harbor or encourage vermin or other pests, nor with Goods liable to taint or affect other Goods.">
                <p className="text-slate-800 dark:text-slate-200 font-medium pl-4 mb-3">
                  Unless otherwise previously agreed in writing, the Customer shall not deliver to the Company or cause the Company to deal with or handle Goods of a dangerous or damaging nature, nor Goods likely to harbor or encourage vermin or other pests, nor with Goods liable to taint or affect other Goods.
                </p>
              </Editable>
              <ul className="space-y-4 pl-8 list-none">
                <li>
                  <span className="text-blue-600 dark:text-blue-400 font-bold">A)</span>{' '}
                  <Editable id="tools.stc.clause6.a" type="textarea" defaultContent="If the Customer is in breach of the above provisions, he shall be liable for all loss or damage whatsoever caused by or to or in connection with the Goods howsoever arising. The Customer shall defend, indemnify and hold harmless the Company against all penalties, claims, damages, costs and expenses whatsoever arising in connection therewith and the Goods may without notice be destroyed or otherwise dealt with at the sole discretion of the Company or any other person in whose custody they may be at the relevant time.">
                    <span>If the Customer is in breach of the above provisions, he shall be liable for all loss or damage whatsoever caused by or to or in connection with the Goods howsoever arising. The Customer shall defend, indemnify and hold harmless the Company against all penalties, claims, damages, costs and expenses whatsoever arising in connection therewith and the Goods may without notice be destroyed or otherwise dealt with at the sole discretion of the Company or any other person in whose custody they may be at the relevant time.</span>
                  </Editable>
                </li>
                <li>
                  <span className="text-blue-600 dark:text-blue-400 font-bold">B)</span>{' '}
                  <Editable id="tools.stc.clause6.b" type="textarea" defaultContent="If the Company agrees to accept Dangerous Goods and then, in the opinion of the Company or any other person, they constitute a risk to other goods, property, life or health they may without notice be destroyed or otherwise dealt with at the expense of the Customer or Owner.">
                    <span>If the Company agrees to accept Dangerous Goods and then, in the opinion of the Company or any other person, they constitute a risk to other goods, property, life or health they may without notice be destroyed or otherwise dealt with at the expense of the Customer or Owner.</span>
                  </Editable>
                </li>
                <li>
                  <span className="text-blue-600 dark:text-blue-400 font-bold">C)</span>{' '}
                  <Editable id="tools.stc.clause6.c" type="textarea" defaultContent="Without prior agreement in writing by an officer of the Company so authorized, the Company will not accept or deal with Goods that require special handling regarding carriage, handling, or security whether owing to their thief-attractive nature or otherwise including, but not limited to bullion, coin, precious stones, jewelry, valuables, antiques, pictures, human remains, livestock, pets, plants. Should any Customer nevertheless deliver any such goods to the Company, or cause the Company to handle or deal with any such goods, otherwise than under such prior agreement, the Company shall have no liability whatsoever for or in connection with the goods howsoever arising.">
                    <span>Without prior agreement in writing by an officer of the Company so authorized, the Company will not accept or deal with Goods that require special handling regarding carriage, handling, or security whether owing to their thief-attractive nature or otherwise including, but not limited to bullion, coin, precious stones, jewelry, valuables, antiques, pictures, human remains, livestock, pets, plants. Should any Customer nevertheless deliver any such goods to the Company, or cause the Company to handle or deal with any such goods, otherwise than under such prior agreement, the Company shall have no liability whatsoever for or in connection with the goods howsoever arising.</span>
                  </Editable>
                </li>
                <li>
                  <span className="text-blue-600 dark:text-blue-400 font-bold">D)</span>{' '}
                  <Editable id="tools.stc.clause6.d" type="textarea" defaultContent="It shall not be the duty of the Company to arrange for the Goods to be carried, stored or handled separately from the Goods of other customers.">
                    <span>It shall not be the duty of the Company to arrange for the Goods to be carried, stored or handled separately from the Goods of other customers.</span>
                  </Editable>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
              <Editable id="tools.stc.clause7.title" defaultContent="7. Temperature-Controlled Goods">
                <h4 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-3">7. Temperature-Controlled Goods</h4>
              </Editable>
              <ul className="space-y-3.5 pl-8 list-none">
                <li>
                  <span className="text-blue-600 dark:text-blue-400 font-bold">A)</span>{' '}
                  <Editable id="tools.stc.clause7.a" type="textarea" defaultContent="The Customer undertakes not to tender for transportation any Goods that require temperature control without previously giving written notice of their nature and particular temperature range to be maintained.">
                    <span>The Customer undertakes not to tender for transportation any Goods that require temperature control without previously giving written notice of their nature and particular temperature range to be maintained.</span>
                  </Editable>
                </li>
                <li>
                  <span className="text-blue-600 dark:text-blue-400 font-bold">B)</span>{' '}
                  <Editable id="tools.stc.clause7.b.title" defaultContent="In the case of a temperature-controlled container stuffed by or on behalf of the Customer by a third party, the Customer further undertakes that:">
                    <span>In the case of a temperature-controlled container stuffed by or on behalf of the Customer by a third party, the Customer further undertakes that:</span>
                  </Editable>
                  <ul className="space-y-2 pl-6 mt-2 list-none">
                    <li>
                      <span className="text-slate-805 dark:text-slate-300 font-semibold">I.</span>{' '}
                      <Editable id="tools.stc.clause7.b.i" defaultContent="The container has been properly pre-cooled or preheated as appropriate, and">
                        <span>The container has been properly pre-cooled or preheated as appropriate, and</span>
                      </Editable>
                    </li>
                    <li>
                      <span className="text-slate-805 dark:text-slate-300 font-semibold">II.</span>{' '}
                      <Editable id="tools.stc.clause7.b.ii" defaultContent="The Goods have been properly stuffed in the container; and">
                        <span>The Goods have been properly stuffed in the container; and</span>
                      </Editable>
                    </li>
                    <li>
                      <span className="text-slate-805 dark:text-slate-300 font-semibold">III.</span>{' '}
                      <Editable id="tools.stc.clause7.b.iii" defaultContent="Its thermostatic controls have been properly set by the Customer or the third party.">
                        <span>Its thermostatic controls have been properly set by the Customer or the third party.</span>
                      </Editable>
                    </li>
                  </ul>
                  <Editable id="tools.stc.clause7.note" type="textarea" defaultContent="Note: If the above requirements are not complied with, the Company shall not be liable for any loss of or damage to the Goods caused by such non-compliance.">
                    <p className="mt-2 text-amber-700 dark:text-amber-500 font-semibold pl-6">
                      Note: If the above requirements are not complied with, the Company shall not be liable for any loss of or damage to the Goods caused by such non-compliance.
                    </p>
                  </Editable>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
              <Editable id="tools.stc.clause8.title" defaultContent="8. Insurance">
                <h4 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-3">8. Insurance</h4>
              </Editable>
              <Editable id="tools.stc.clause8.intro" type="textarea" defaultContent="No insurance will be effected except upon express instructions given in writing by the Customer. All insurance effected by the Company is subject to the usual exceptions and conditions of the policies of the insurance Company or underwriters taking the risk.">
                <p className="text-slate-805 dark:text-slate-300 font-medium pl-4 mb-3">
                  No insurance will be effected except upon express instructions given in writing by the Customer. All insurance effected by the Company is subject to the usual exceptions and conditions of the policies of the insurance Company or underwriters taking the risk.
                </p>
              </Editable>
              <ul className="space-y-3.5 pl-8 list-none">
                <li>
                  <span className="text-blue-600 dark:text-blue-400 font-bold">A)</span>{' '}
                  <Editable id="tools.stc.clause8.a" type="textarea" defaultContent="The Company is an agent of the Customer in respect of effecting insurance.">
                    <span>The Company is an agent of the Customer in respect of effecting insurance.</span>
                  </Editable>
                </li>
                <li>
                  <span className="text-blue-600 dark:text-blue-400 font-bold">B)</span>{' '}
                  <Editable id="tools.stc.clause8.b" type="textarea" defaultContent="Unless otherwise agreed in writing, the Company shall not be under any obligation to affect a separate insurance on each consignment but may declare it on any open or general policy.">
                    <span>Unless otherwise agreed in writing, the Company shall not be under any obligation to affect a separate insurance on each consignment but may declare it on any open or general policy.</span>
                  </Editable>
                </li>
                <li>
                  <span className="text-blue-600 dark:text-blue-400 font-bold">C)</span>{' '}
                  <Editable id="tools.stc.clause8.c" type="textarea" defaultContent="Should the insurers dispute their liability for any reason, the insured shall have recourse against the insurers only. The Company shall not have any responsibility or liability whatsoever in relation to the insurance notwithstanding that the premium upon the policy may not be at the same rate as that charged by the Company or paid to the Company by its Customers.">
                    <span>Should the insurers dispute their liability for any reason, the insured shall have recourse against the insurers only. The Company shall not have any responsibility or liability whatsoever in relation to the insurance notwithstanding that the premium upon the policy may not be at the same rate as that charged by the Company or paid to the Company by its Customers.</span>
                  </Editable>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
              <Editable id="tools.stc.clause9.title" defaultContent="9. Declarations">
                <h4 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-3">9. Declarations</h4>
              </Editable>
              <Editable id="tools.stc.clause9.content" type="textarea" defaultContent="The Company shall not be obliged to make any declaration for the purposes of any statute, convention or contract as to the nature or value of any Goods, or as to any special interest in delivery unless express written instructions to that effect have been received and accepted by the Company.">
                <p className="text-slate-705 dark:text-slate-300 pl-4">
                  The Company shall not be obliged to make any declaration for the purposes of any statute, convention or contract as to the nature or value of any Goods, or as to any special interest in delivery unless express written instructions to that effect have been received and accepted by the Company.
                </p>
              </Editable>
            </div>

            <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
              <Editable id="tools.stc.clause10.title" defaultContent="10. Delivery Instructions">
                <h4 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-3">10. Delivery Instructions</h4>
              </Editable>
              <ul className="space-y-2.5 pl-8 list-none">
                <li>
                  <span className="text-blue-600 dark:text-blue-400 font-bold">A)</span>{' '}
                  <Editable id="tools.stc.clause10.a" type="textarea" defaultContent="Unless otherwise previously agreed in writing or otherwise provided for under the provisions of a document signed by the Company, instructions relating to the delivery or release of Goods against payment or against surrender of a particular document shall be in writing.">
                    <span>Unless otherwise previously agreed in writing or otherwise provided for under the provisions of a document signed by the Company, instructions relating to the delivery or release of Goods against payment or against surrender of a particular document shall be in writing.</span>
                  </Editable>
                </li>
                <li>
                  <span className="text-blue-600 dark:text-blue-400 font-bold">B)</span>{' '}
                  <Editable id="tools.stc.clause10.b" type="textarea" defaultContent="The Company's liability resulting from such instructions relating to the delivery or release of the Goods other than in writing shall not exceed that provided for in respect of mis-delivery of Goods.">
                    <span>The Company's liability resulting from such instructions relating to the delivery or release of the Goods other than in writing shall not exceed that provided for in respect of mis-delivery of Goods.</span>
                  </Editable>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
              <Editable id="tools.stc.clause11.title" defaultContent="11. Dates and Delays">
                <h4 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-3">11. Dates and Delays</h4>
              </Editable>
              <Editable id="tools.stc.clause11.content" type="textarea" defaultContent="Unless otherwise previously agreed in writing that the Goods shall depart or arrive by a particular date, the Company accepts no responsibility for departure or arrival dates of Goods, whether or not any such delay is caused by the negligence of the Company and/or its servants or agents.">
                <p className="text-slate-705 dark:text-slate-300 pl-4">
                  Unless otherwise previously agreed in writing that the Goods shall depart or arrive by a particular date, the Company accepts no responsibility for departure or arrival dates of Goods, whether or not any such delay is caused by the negligence of the Company and/or its servants or agents.
                </p>
              </Editable>
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-6">
          <Editable id="tools.stc.indemnities.title" defaultContent="General Indemnities">
            <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mt-12 mb-4 border-b border-blue-100 dark:border-blue-900/40 pb-2">
              General Indemnities
            </h3>
          </Editable>

          <div className="space-y-6">
            <div>
              <Editable id="tools.stc.clause12.title" defaultContent="12. Indemnity Obligations">
                <h4 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-3">12. Indemnity Obligations</h4>
              </Editable>
              <ul className="space-y-4 pl-8 list-none">
                <li>
                  <span className="text-blue-600 dark:text-blue-400 font-bold">A)</span>{' '}
                  <Editable id="tools.stc.clause12.a.title" defaultContent="The Customer and Owner shall defend, indemnify and hold harmless the Company against all liability, loss, damage, costs and expenses arising:">
                    <span>The Customer and Owner shall defend, indemnify and hold harmless the Company against all liability, loss, damage, costs and expenses arising:</span>
                  </Editable>
                  <ul className="space-y-2 pl-6 mt-2 list-none">
                    <li>
                      <span className="text-slate-805 dark:text-slate-300 font-semibold">I.</span>{' '}
                      <Editable id="tools.stc.clause12.a.i" type="textarea" defaultContent="From the nature of the Goods unless caused by the Company's negligence.">
                        <span>From the nature of the Goods unless caused by the Company's negligence.</span>
                      </Editable>
                    </li>
                    <li>
                      <span className="text-slate-805 dark:text-slate-300 font-semibold">II.</span>{' '}
                      <Editable id="tools.stc.clause12.a.ii" type="textarea" defaultContent="For any damage or injury caused by faulty or insufficient packing of the Goods or by faulty loading or packing when such packing has been performed by the Customer or on behalf of the Customer by a person other than the Company.">
                        <span>For any damage or injury caused by faulty or insufficient packing of the Goods or by faulty loading or packing when such packing has been performed by the Customer or on behalf of the Customer by a person other than the Company.</span>
                      </Editable>
                    </li>
                    <li>
                      <span className="text-slate-805 dark:text-slate-300 font-semibold">III.</span>{' '}
                      <Editable id="tools.stc.clause12.a.iii" type="textarea" defaultContent="Out of the Company acting in accordance with the Customer's or Owner's instructions, or">
                        <span>Out of the Company acting in accordance with the Customer's or Owner's instructions, or</span>
                      </Editable>
                    </li>
                    <li>
                      <span className="text-slate-805 dark:text-slate-300 font-semibold">IV.</span>{' '}
                      <Editable id="tools.stc.clause12.a.iv" type="textarea" defaultContent="From a breach of warranty or obligation by the Customer or arising from the negligence of the Customer or Owner.">
                        <span>From a breach of warranty or obligation by the Customer or arising from the negligence of the Customer or Owner.</span>
                      </Editable>
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="text-blue-600 dark:text-blue-400 font-bold">B)</span>{' '}
                  <Editable id="tools.stc.clause12.b" type="textarea" defaultContent="Except to the extent caused by the Company's negligence, the Customer and Owner shall be liable for and shall defend, indemnify and hold harmless the Company in respect of all duties, taxes, imposts, levies, deposits and outlays of whatsoever nature levied by an Authority in respect of the Goods, Dangerous Goods and/or Container and for all liabilities, payments, fines, costs, expenses, loss and damage whatsoever incurred or sustained by the Company in connection therewith.">
                    <span>Except to the extent caused by the Company's negligence, the Customer and Owner shall be liable for and shall defend, indemnify and hold harmless the Company in respect of all duties, taxes, imposts, levies, deposits and outlays of whatsoever nature levied by an Authority in respect of the Goods, Dangerous Goods and/or Container and for all liabilities, payments, fines, costs, expenses, loss and damage whatsoever incurred or sustained by the Company in connection therewith.</span>
                  </Editable>
                </li>
                <li>
                  <span className="text-blue-600 dark:text-blue-400 font-bold">C)</span>{' '}
                  <Editable id="tools.stc.clause12.c" type="textarea" defaultContent="Advice and information in whatever form it may be given is provided by the Company for the Customer and/or Owner only, and the Customer and/or Owner shall defend, indemnify and hold harmless the Company for all liability, loss, damage, costs and expenses arising out of any other person relying on such advice or information. The Customer shall not pass such advice or information to any third party without the Company's written authority, and the Customer and/or Owner shall indemnify the Company against any loss suffered due to a breach of this condition.">
                    <span>Advice and information in whatever form it may be given is provided by the Company for the Customer and/or Owner only, and the Customer and/or Owner shall defend, indemnify and hold harmless the Company for all liability, loss, damage, costs and expenses arising out of any other person relying on such advice or information. The Customer shall not pass such advice or information to any third party without the Company's written authority, and the Customer and/or Owner shall indemnify the Company against any loss suffered due to a breach of this condition.</span>
                  </Editable>
                </li>
                <li>
                  <span className="text-blue-600 dark:text-blue-400 font-bold">D)</span>{' '}
                  <Editable id="tools.stc.clause12.d.title" defaultContent="Liability protections and third-party claims:">
                    <span>Liability protections and third-party claims:</span>
                  </Editable>
                  <ul className="space-y-2.5 pl-6 mt-2 list-none">
                    <li>
                      <span className="text-slate-805 dark:text-slate-300 font-semibold">I.</span>{' '}
                      <Editable id="tools.stc.clause12.d.i" type="textarea" defaultContent="The Customer undertakes that no claim be made against any Director, servant, employee, sub-contractor or agent of the Company which imposes or attempts to impose upon any of them any liability whatsoever in connection with the Goods, and if any such claim should nevertheless be made, to indemnify and hold harmless the Company against all consequences thereof.">
                        <span>The Customer undertakes that no claim be made against any Director, servant, employee, sub-contractor or agent of the Company which imposes or attempts to impose upon any of them any liability whatsoever in connection with the Goods, and if any such claim should nevertheless be made, to indemnify and hold harmless the Company against all consequences thereof.</span>
                      </Editable>
                    </li>
                    <li>
                      <span className="text-slate-805 dark:text-slate-300 font-semibold">II.</span>{' '}
                      <Editable id="tools.stc.clause12.d.ii" type="textarea" defaultContent="Without prejudice to the foregoing, every such servant, sub-contractor or agent shall have the benefit of all provisions herein, as if such provisions were expressly for their benefit. In entering into this contract, the Company, to the extent of those provisions, does so not only on its behalf but as agent and trustee for such servants, sub-contractors and agents.">
                        <span>Without prejudice to the foregoing, every such servant, sub-contractor or agent shall have the benefit of all provisions herein, as if such provisions were expressly for their benefit. In entering into this contract, the Company, to the extent of those provisions, does so not only on its behalf but as agent and trustee for such servants, sub-contractors and agents.</span>
                      </Editable>
                    </li>
                    <li>
                      <span className="text-slate-805 dark:text-slate-300 font-semibold">III.</span>{' '}
                      <Editable id="tools.stc.clause12.d.iii" type="textarea" defaultContent="The Customer shall defend, indemnify and hold harmless the Company from and against all claims, costs and demands whatsoever and by whomsoever made or preferred in excess of the liability of the Company under the terms of these conditions, and without prejudice to the generality of this clause, this indemnity shall cover all claims, costs and demands arising from or in connection with the negligence of the Company, its servants, sub-contractors and agents.">
                        <span>The Customer shall defend, indemnify and hold harmless the Company from and against all claims, costs and demands whatsoever and by whomsoever made or preferred in excess of the liability of the Company under the terms of these conditions, and without prejudice to the generality of this clause, this indemnity shall cover all claims, costs and demands arising from or in connection with the negligence of the Company, its servants, sub-contractors and agents.</span>
                      </Editable>
                    </li>
                    <li>
                      <span className="text-slate-805 dark:text-slate-300 font-semibold">IV.</span>{' '}
                      <Editable id="tools.stc.clause12.d.iv" type="textarea" defaultContent="In this clause, &quot;sub-contractors&quot; includes direct and indirect sub-contractors and their respective servants and agents.">
                        <span>In this clause, &quot;sub-contractors&quot; includes direct and indirect sub-contractors and their respective servants and agents.</span>
                      </Editable>
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="text-blue-600 dark:text-blue-400 font-bold">E)</span>{' '}
                  <Editable id="tools.stc.clause12.e" type="textarea" defaultContent="The Customer shall be liable for the loss, damage, contamination, soiling, detention or demurrage before, during and after the carriage of property (including, but not limited to, Containers) of the Company or any person or vessel referred to in sub-clause (D) above caused by the Customer or Owner or any person acting on behalf of either of them or for which the Customer is otherwise responsible.">
                    <span>The Customer shall be liable for the loss, damage, contamination, soiling, detention or demurrage before, during and after the carriage of property (including, but not limited to, Containers) of the Company or any person or vessel referred to in sub-clause (D) above caused by the Customer or Owner or any person acting on behalf of either of them or for which the Customer is otherwise responsible.</span>
                  </Editable>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-6">
          <Editable id="tools.stc.charges.title" defaultContent="Charges and Payments">
            <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mt-12 mb-4 border-b border-blue-100 dark:border-blue-900/40 pb-2">
              Charges and Payments
            </h3>
          </Editable>

          <div className="space-y-6">
            <div>
              <Editable id="tools.stc.clause13.title" defaultContent="13. Payments and Default Database">
                <h4 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-3">13. Payments and Default Database</h4>
              </Editable>
              <ul className="space-y-4 pl-8 list-none">
                <li>
                  <span className="text-blue-600 dark:text-blue-400 font-bold">A)</span>{' '}
                  <Editable id="tools.stc.clause13.a" type="textarea" defaultContent="The Customer shall pay to the Company in cash or as agreed all sums immediately when due without reduction or deferment on account of any claim, counterclaim or set-off.">
                    <span>The Customer shall pay to the Company in cash or as agreed all sums immediately when due without reduction or deferment on account of any claim, counterclaim or set-off.</span>
                  </Editable>
                </li>
                <li>
                  <span className="text-blue-600 dark:text-blue-400 font-bold">B)</span>{' '}
                  <Editable id="tools.stc.clause13.b" type="textarea" defaultContent="Despite the acceptance by the Company of instructions from the Customer to collect freight, duties, charges, dues or other expenses from the Consignee, or any other person, on receipt of evidence of proper demand by the Company, and in the absence of evidence of payment (for whatever reason) by such Consignee or other person, the Customer shall remain responsible for the payment of such freight, duties, charges, dues or other expenses within seven (7) days of the time when such moneys should have been paid.">
                    <span>Despite the acceptance by the Company of instructions from the Customer to collect freight, duties, charges, dues or other expenses from the Consignee, or any other person, on receipt of evidence of proper demand by the Company, and in the absence of evidence of payment (for whatever reason) by such Consignee or other person, the Customer shall remain responsible for the payment of such freight, duties, charges, dues or other expenses within seven (7) days of the time when such moneys should have been paid.</span>
                  </Editable>
                </li>
                <li>
                  <span className="text-blue-600 dark:text-blue-400 font-bold">C)</span>{' '}
                  <Editable id="tools.stc.clause13.c" type="textarea" defaultContent="On all amounts overdue to the Company, the Company shall be entitled to legal interest, calculated at 24% per annum for the period that such amounts are overdue.">
                    <span>On all amounts overdue to the Company, the Company shall be entitled to legal interest, calculated at 24% per annum for the period that such amounts are overdue.</span>
                  </Editable>
                </li>
                <li>
                  <span className="text-blue-600 dark:text-blue-400 font-bold">D)</span>{' '}
                  <Editable id="tools.stc.clause13.d.title" defaultContent="In the event the Customer fails to pay any amount due to the Company in accordance with these Conditions, the Customer is deemed to have consented to:">
                    <span>In the event the Customer fails to pay any amount due to the Company in accordance with these Conditions, the Customer is deemed to have consented to:</span>
                  </Editable>
                  <ul className="space-y-2 pl-6 mt-2 list-none">
                    <li>
                      <span className="text-slate-805 dark:text-slate-300 font-semibold">I.</span>{' '}
                      <Editable id="tools.stc.clause13.d.i" type="textarea" defaultContent="The Company, at its discretion, without prior notice to the Customer, publishing details of the Customer's failure to pay to the SLFFA CS Database of defaults; and">
                        <span>The Company, at its discretion, without prior notice to the Customer, publishing details of the Customer's failure to pay to the SLFFA CS Database of defaults; and</span>
                      </Editable>
                    </li>
                    <li>
                      <span className="text-slate-805 dark:text-slate-300 font-semibold">II.</span>{' '}
                      <Editable id="tools.stc.clause13.d.ii" type="textarea" defaultContent="In the event the Company acts in accordance with 13(D)(I) above, to the details of such failure remaining on the SLFFA CS Database for viewing by SLFFA CS Members until the amount so due is paid.">
                        <span>In the event the Company acts in accordance with 13(D)(I) above, to the details of such failure remaining on the SLFFA CS Database for viewing by SLFFA CS Members until the amount so due is paid.</span>
                      </Editable>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-6">
          <Editable id="tools.stc.liberties.title" defaultContent="Liberties and Rights of Company">
            <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mt-12 mb-4 border-b border-blue-100 dark:border-blue-900/40 pb-2">
              Liberties and Rights of Company
            </h3>
          </Editable>

          <div className="space-y-6">
            <div>
              <Editable id="tools.stc.clause14.title" defaultContent="14. General Rights and Performance">
                <h4 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-3">14. General Rights and Performance</h4>
              </Editable>
              <Editable id="tools.stc.clause14.intro" type="textarea" defaultContent="The Company shall perform its duties with a reasonable degree of care, diligence, skill and judgement and in accordance with the code of ethics provided for in the schedule to these trading conditions.">
                <p className="text-slate-800 dark:text-slate-200 font-medium pl-4 mb-3">
                  The Company shall perform its duties with a reasonable degree of care, diligence, skill and judgement and in accordance with the code of ethics provided for in the schedule to these trading conditions.
                </p>
              </Editable>
              <ul className="space-y-3 pl-8 list-none">
                <li>
                  <span className="text-slate-900 dark:text-white font-bold">1.</span>{' '}
                  <Editable id="tools.stc.clause14.1" type="textarea" defaultContent="Subject to Clause 8, the Company shall advise its customers of the necessity of effecting insurances with regard to the various services to be performed.">
                    <span>Subject to Clause 8, the Company shall advise its customers of the necessity of effecting insurances with regard to the various services to be performed.</span>
                  </Editable>
                </li>
                <li>
                  <span className="text-slate-900 dark:text-white font-bold">2.</span>{' '}
                  <Editable id="tools.stc.clause14.2.title" defaultContent="The Company shall be entitled, except insofar as has been otherwise agreed in writing, to enter into contracts, on any terms whatsoever, on behalf of itself or the Customer and without notice to the Customer:">
                    <span>The Company shall be entitled, except insofar as has been otherwise agreed in writing, to enter into contracts, on any terms whatsoever, on behalf of itself or the Customer and without notice to the Customer:</span>
                  </Editable>
                  <ul className="space-y-2 pl-6 mt-2 list-none">
                    <li>
                      <span className="text-blue-600 dark:text-blue-400 font-bold">A)</span>{' '}
                      <Editable id="tools.stc.clause14.2.a" type="textarea" defaultContent="For the carriage of Goods by any route, means or person;">
                        <span>For the carriage of Goods by any route, means or person;</span>
                      </Editable>
                    </li>
                    <li>
                      <span className="text-blue-600 dark:text-blue-400 font-bold">B)</span>{' '}
                      <Editable id="tools.stc.clause14.2.b" type="textarea" defaultContent="For the carriage of Goods of any description whether containerized or not on or under the deck of any vessel;">
                        <span>For the carriage of Goods of any description whether containerized or not on or under the deck of any vessel;</span>
                      </Editable>
                    </li>
                    <li>
                      <span className="text-blue-600 dark:text-blue-400 font-bold">C)</span>{' '}
                      <Editable id="tools.stc.clause14.2.c" type="textarea" defaultContent="For the storage, packing, transshipment, loading, unloading or handling of Goods by any person at any place whether on shore or afloat and for any length of time;">
                        <span>For the storage, packing, transshipment, loading, unloading or handling of Goods by any person at any place whether on shore or afloat and for any length of time;</span>
                      </Editable>
                    </li>
                    <li>
                      <span className="text-blue-600 dark:text-blue-400 font-bold">D)</span>{' '}
                      <Editable id="tools.stc.clause14.2.d" type="textarea" defaultContent="For the storage of Goods in containers or with other goods of whatever nature;">
                        <span>For the storage of Goods in containers or with other goods of whatever nature;</span>
                      </Editable>
                    </li>
                    <li>
                      <span className="text-blue-600 dark:text-blue-400 font-bold">E)</span>{' '}
                      <Editable id="tools.stc.clause14.2.e" type="textarea" defaultContent="For the performance of its own obligation and to do such acts as in the opinion of the Company may be necessary or incidental to the performance of the Company's obligations.">
                        <span>For the performance of its own obligation and to do such acts as in the opinion of the Company may be necessary or incidental to the performance of the Company's obligations.</span>
                      </Editable>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
              <Editable id="tools.stc.clause17.title" defaultContent="17. Departure from Instructions and Compliance">
                <h4 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-3">17. Departure from Instructions and Compliance</h4>
              </Editable>
              <ul className="space-y-2.5 pl-8 list-none">
                <li>
                  <span className="text-blue-600 dark:text-blue-400 font-bold">A)</span>{' '}
                  <Editable id="tools.stc.clause17.a" type="textarea" defaultContent="The Company shall be entitled but under no obligation, to depart from the Customer's instructions in any respect if in the opinion of the Company there is good reason to do so in the Customer's interest and it shall not thereby incur any additional liability.">
                    <span>The Company shall be entitled but under no obligation, to depart from the Customer's instructions in any respect if in the opinion of the Company there is good reason to do so in the Customer's interest and it shall not thereby incur any additional liability.</span>
                  </Editable>
                </li>
                <li>
                  <span className="text-blue-600 dark:text-blue-400 font-bold">B)</span>{' '}
                  <Editable id="tools.stc.clause17.b" type="textarea" defaultContent="The Company may at any time comply with the order or recommendations given by any Authority. The responsibility of the Company in respect of the Goods shall cease on the delivery or other disposition of the Goods in accordance with such orders or recommendations.">
                    <span>The Company may at any time comply with the order or recommendations given by any Authority. The responsibility of the Company in respect of the Goods shall cease on the delivery or other disposition of the Goods in accordance with such orders or recommendations.</span>
                  </Editable>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
              <Editable id="tools.stc.clause18.title" defaultContent="18. Hindrances and Force Majeure">
                <h4 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-3">18. Hindrances and Force Majeure</h4>
              </Editable>
              <Editable id="tools.stc.clause18.intro" type="textarea" defaultContent="If at any time the performance of the Company's obligations, in the opinion of the Company or any person whose services the Company makes use of, is or is likely to be affected by any:">
                <p className="text-slate-800 dark:text-slate-200 font-medium pl-4 mb-2">
                  If at any time the performance of the Company's obligations, in the opinion of the Company or any person whose services the Company makes use of, is or is likely to be affected by any:
                </p>
              </Editable>
              <ul className="grid grid-cols-2 md:grid-cols-5 gap-3 pl-8 mb-4">
                <li className="bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded text-center text-sm font-semibold text-slate-700 dark:text-slate-300">A) Hindrance</li>
                <li className="bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded text-center text-sm font-semibold text-slate-700 dark:text-slate-300">B) Risk</li>
                <li className="bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded text-center text-sm font-semibold text-slate-700 dark:text-slate-300">C) Delay</li>
                <li className="bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded text-center text-sm font-semibold text-slate-700 dark:text-slate-300">D) Difficulty</li>
                <li className="bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded text-center text-sm font-semibold text-slate-700 dark:text-slate-300">E) Disadvantage</li>
              </ul>
              <Editable id="tools.stc.clause18.content" type="textarea" defaultContent="and which cannot be avoided by reasonable endeavors by the Company or such other person, the Company may, on giving notice in writing to the Customer or Owner or without notice where it is not reasonably possible to give such notice, treat the performance of its obligations as terminated and place the Goods or any part of them at the Customer or Owner's disposal at any place which the Company may deem safe and convenient, whereupon the responsibility of the Company in respect of the Goods shall cease. The Customer shall be responsible for all additional costs of carriage to, and delivery and storage at, such place and all other expenses incurred by the Company.">
                <p className="text-slate-707 pl-4">
                  and which cannot be avoided by reasonable endeavors by the Company or such other person, the Company may, on giving notice in writing to the Customer or Owner or without notice where it is not reasonably possible to give such notice, treat the performance of its obligations as terminated and place the Goods or any part of them at the Customer or Owner's disposal at any place which the Company may deem safe and convenient, whereupon the responsibility of the Company in respect of the Goods shall cease. The Customer shall be responsible for all additional costs of carriage to, and delivery and storage at, such place and all other expenses incurred by the Company.
                </p>
              </Editable>
            </div>

            <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
              <Editable id="tools.stc.clause19.title" defaultContent="19. Storage on Non-Delivery">
                <h4 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-3">19. Storage on Non-Delivery</h4>
              </Editable>
              <Editable id="tools.stc.clause19.content" type="textarea" defaultContent="If the Customer or Owner does not take delivery of the Goods or any part thereof at the time and place when and where the Company, or any person whose services the Company makes use of, is entitled to call upon the Customer or Owner to take delivery thereof, the Company or such other person shall be entitled, without further notice, to store the Goods or any part of the Goods in the open or under cover at the sole risk and expense of the Customer. Such storage shall constitute delivery of the Goods and the liability of the Company shall wholly cease.">
                <p className="text-slate-705 dark:text-slate-300 pl-4">
                  If the Customer or Owner does not take delivery of the Goods or any part thereof at the time and place when and where the Company, or any person whose services the Company makes use of, is entitled to call upon the Customer or Owner to take delivery thereof, the Company or such other person shall be entitled, without further notice, to store the Goods or any part of the Goods in the open or under cover at the sole risk and expense of the Customer. Such storage shall constitute delivery of the Goods and the liability of the Company shall wholly cease.
                </p>
              </Editable>
            </div>

            <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
              <Editable id="tools.stc.clause20.title" defaultContent="20. Disposal of Goods">
                <h4 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-3">20. Disposal of Goods</h4>
              </Editable>
              <Editable id="tools.stc.clause20.intro" type="textarea" defaultContent="Notwithstanding Clauses 18 and 19, the Company shall be entitled, but under no obligation, at the expense of the Customer payable on demand and without any liability to the Customer and Owner, to sell or dispose of:">
                <p className="text-slate-705 dark:text-slate-300 pl-4">
                  Notwithstanding Clauses 18 and 19, the Company shall be entitled, but under no obligation, at the expense of the Customer payable on demand and without any liability to the Customer and Owner, to sell or dispose of:
                </p>
              </Editable>
              <ul className="space-y-2 pl-8 mt-2 list-none">
                <li>
                  <span className="text-slate-900 dark:text-white font-bold">I.</span>{' '}
                  <Editable id="tools.stc.clause20.i" type="textarea" defaultContent="On giving 21-day notice in writing to the Customer, all Goods which in the opinion of the Company cannot be delivered as instructed; and">
                    <span>On giving 21-day notice in writing to the Customer, all Goods which in the opinion of the Company cannot be delivered as instructed; and</span>
                  </Editable>
                </li>
                <li>
                  <span className="text-slate-900 dark:text-white font-bold">II.</span>{' '}
                  <Editable id="tools.stc.clause20.ii" type="textarea" defaultContent="Without notice, Goods which have perished, deteriorated or altered, or are liable to do so, in a manner which has caused or may be reasonably expected to cause loss or damage to any person or property or to contravene any applicable laws or regulations.">
                    <span>Without notice, Goods which have perished, deteriorated or altered, or are liable to do so, in a manner which has caused or may be reasonably expected to cause loss or damage to any person or property or to contravene any applicable laws or regulations.</span>
                  </Editable>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-6">
          <Editable id="tools.stc.part2.title" defaultContent="Part II: Company as Agent">
            <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mt-12 mb-4 border-b border-blue-100 dark:border-blue-900/40 pb-2">
              Part II: Company as Agent
            </h3>
          </Editable>

          <div className="space-y-6">
            <div>
              <Editable id="tools.stc.clause30.title" defaultContent="30. Agency Status and Non-Liability">
                <h4 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-3">30. Agency Status and Non-Liability</h4>
              </Editable>
              <ul className="space-y-3 pl-8 list-none">
                <li>
                  <span className="text-blue-600 dark:text-blue-400 font-bold">A)</span>{' '}
                  <Editable id="tools.stc.clause30.a" type="textarea" defaultContent="To the extent that the Company acts as an agent, the Company does not make or purport to make any contract with the Customer for the carriage, storage or handling of the Goods nor for any other physical service in relation to them and acts solely on behalf of the Customer in securing such services by establishing contracts with third parties so that direct contractual relationships are established between the Customer and such third parties.">
                    <span>To the extent that the Company acts as an agent, the Company does not make or purport to make any contract with the Customer for the carriage, storage or handling of the Goods nor for any other physical service in relation to them and acts solely on behalf of the Customer in securing such services by establishing contracts with third parties so that direct contractual relationships are established between the Customer and such third parties.</span>
                  </Editable>
                </li>
                <li>
                  <span className="text-blue-600 dark:text-blue-400 font-bold">B)</span>{' '}
                  <Editable id="tools.stc.clause30.b" type="textarea" defaultContent="The Company shall not be liable for the acts and omissions of such third parties referred to in sub-clause (A) above.">
                    <span>The Company shall not be liable for the acts and omissions of such third parties referred to in sub-clause (A) above.</span>
                  </Editable>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
              <Editable id="tools.stc.clause31.title" defaultContent="31. Procurement Authority and Negligence Indemnity">
                <h4 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-3">31. Procurement Authority and Negligence Indemnity</h4>
              </Editable>
              <ul className="space-y-3 pl-8 list-none">
                <li>
                  <span className="text-blue-600 dark:text-blue-400 font-bold">A)</span>{' '}
                  <Editable id="tools.stc.clause31.a" type="textarea" defaultContent="The Company when acting as an agent has the authority of the Customer to enter into contracts on the Customer's behalf and to do such acts so as to bind the Customer by such contracts and acts in all respects notwithstanding any departure from the Customer's instructions.">
                    <span>The Company when acting as an agent has the authority of the Customer to enter into contracts on the Customer's behalf and to do such acts so as to bind the Customer by such contracts and acts in all respects notwithstanding any departure from the Customer's instructions.</span>
                  </Editable>
                </li>
                <li>
                  <span className="text-blue-600 dark:text-blue-400 font-bold">B)</span>{' '}
                  <Editable id="tools.stc.clause31.b" type="textarea" defaultContent="Except to the extent caused by the Company's negligence, the Customer shall defend, indemnify and hold harmless the Company in respect of all liability, loss, damage, costs or expenses arising out of any contracts made in the procurement of the Customer's requirements in accordance with Clause 48.">
                    <span>Except to the extent caused by the Company's negligence, the Customer shall defend, indemnify and hold harmless the Company in respect of all liability, loss, damage, costs or expenses arising out of any contracts made in the procurement of the Customer's requirements in accordance with Clause 48.</span>
                  </Editable>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
              <Editable id="tools.stc.clause32.title" defaultContent="32. Choice of Rates">
                <h4 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-3">32. Choice of Rates</h4>
              </Editable>
              <Editable id="tools.stc.clause32.content" type="textarea" defaultContent="Where there is a choice of rates according to the extent or degree of liability assumed by persons carrying, storing, handling the Goods, no declaration of value where optional will be made unless otherwise agreed in writing.">
                <p className="text-slate-705 dark:text-slate-300 pl-4">
                  Where there is a choice of rates according to the extent or degree of liability assumed by persons carrying, storing, handling the Goods, no declaration of value where optional will be made unless otherwise agreed in writing.
                </p>
              </Editable>
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-6">
          <Editable id="tools.stc.part3.title" defaultContent="Part III: Company as Principal">
            <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mt-12 mb-4 border-b border-blue-100 dark:border-blue-900/40 pb-2">
              Part III: Company as Principal
            </h3>
          </Editable>

          <div className="space-y-6">
            <div>
              <Editable id="tools.stc.clause33.title" defaultContent="33. Performance and Liability (As Principal)">
                <h4 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-3">33. Performance and Liability (As Principal)</h4>
              </Editable>
              <Editable id="tools.stc.clause33.content" type="textarea" defaultContent="To the extent that the Company contracts as principal for the performance of the Customer's instructions, the Company undertakes to perform or in its own name to procure the performance of the Customer's instructions and subject to the provisions of these conditions shall be liable for the loss of or damage to the Goods occurring from the time that the Goods are taken into its charge until the time of delivery.">
                <p className="text-slate-705 dark:text-slate-300 pl-4">
                  To the extent that the Company contracts as principal for the performance of the Customer's instructions, the Company undertakes to perform or in its own name to procure the performance of the Customer's instructions and subject to the provisions of these conditions shall be liable for the loss of or damage to the Goods occurring from the time that the Goods are taken into its charge until the time of delivery.
                </p>
              </Editable>
            </div>

            <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
              <Editable id="tools.stc.clause34.title" defaultContent="34. Legal Convention Applicability">
                <h4 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-3">34. Legal Convention Applicability</h4>
              </Editable>
              <Editable id="tools.stc.clause34.intro" type="textarea" defaultContent="Notwithstanding other provisions in these Conditions, if it can be proved where the loss of or damage to the Goods occurred, the Company's liability shall be determined by the provisions contained in any international convention or national law, the provisions of which:">
                <p className="text-slate-808 font-medium pl-4 mb-2">
                  Notwithstanding other provisions in these Conditions, if it can be proved where the loss of or damage to the Goods occurred, the Company's liability shall be determined by the provisions contained in any international convention or national law, the provisions of which:
                </p>
              </Editable>
              <ul className="space-y-2.5 pl-8 list-none">
                <li>
                  <span className="text-blue-600 dark:text-blue-400 font-bold">A).</span>{' '}
                  <Editable id="tools.stc.clause34.a" type="textarea" defaultContent="Cannot be departed from by private contract, to the detriment of the claimant;">
                    <span>Cannot be departed from by private contract, to the detriment of the claimant;</span>
                  </Editable>
                </li>
                <li>
                  <span className="text-blue-600 dark:text-blue-400 font-bold">B).</span>{' '}
                  <Editable id="tools.stc.clause34.b" type="textarea" defaultContent="Could have applied if the claimant had made a separate and direct contract with the actual provider of the particular service in respect of that service or stage of carriage where the loss or damage occurred and received as evidence thereof any particular document which must be issued if such international convention or national law shall apply.">
                    <span>Could have applied if the claimant had made a separate and direct contract with the actual provider of the particular service in respect of that service or stage of carriage where the loss or damage occurred and received as evidence thereof any particular document which must be issued if such international convention or national law shall apply.</span>
                  </Editable>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
              <Editable id="tools.stc.clause35.title" defaultContent="35. Water Carriage and Hague Visby Rules">
                <h4 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-3">35. Water Carriage and Hague Visby Rules</h4>
              </Editable>
              <Editable id="tools.stc.clause35.content" type="textarea" defaultContent="Notwithstanding other provisions in these Conditions, if it can be proved that the loss of or damage to the Goods occurred at sea or inland waterway and the provisions of Clause 35 do not apply, the Company's liability shall be determined by the Hague Visby Rules to carriage by sea shall be deemed to include reference to carriage by inland waterways and the Hague Visby Rules shall be construed accordingly.">
                <p className="text-slate-705 dark:text-slate-300 pl-4">
                  Notwithstanding other provisions in these Conditions, if it can be proved that the loss of or damage to the Goods occurred at sea or inland waterway and the provisions of Clause 35 do not apply, the Company's liability shall be determined by the Hague Visby Rules to carriage by sea shall be deemed to include reference to carriage by inland waterways and the Hague Visby Rules shall be construed accordingly.
                </p>
              </Editable>
            </div>

            <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
              <Editable id="tools.stc.clause36.title" defaultContent="36. Vessel Owner Limitation Fund">
                <h4 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-3">36. Vessel Owner Limitation Fund</h4>
              </Editable>
              <Editable id="tools.stc.clause36.content" type="textarea" defaultContent="Notwithstanding the provisions of Clause 35, if the loss of or damage to the Goods occurred at sea or on inland waterways, and the Owner, Charterer or operator of the vessel establishes a limitation fund, the liability of the Company shall be limited to the proportion of the said limitation fund allocated to the Goods.">
                <p className="text-slate-705 dark:text-slate-300 pl-4">
                  Notwithstanding the provisions of Clause 35, if the loss of or damage to the Goods occurred at sea or on inland waterways, and the Owner, Charterer or operator of the vessel establishes a limitation fund, the liability of the Company shall be limited to the proportion of the said limitation fund allocated to the Goods.
                </p>
              </Editable>
            </div>

            <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
              <Editable id="tools.stc.clause37.title" defaultContent="37. Both-to-Blame Collision Clause and Liability Limits">
                <h4 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-3">37. Both-to-Blame Collision Clause and Liability Limits</h4>
              </Editable>
              <Editable id="tools.stc.clause37.intro" type="textarea" defaultContent="The current Both-to-Blame Collision clause as adopted by BIMCO is incorporated in these conditions.">
                <p className="text-slate-805 dark:text-slate-300 font-medium pl-4 mb-3">
                  The current Both-to-Blame Collision clause as adopted by BIMCO is incorporated in these conditions.
                </p>
              </Editable>
              <ul className="space-y-4 pl-8 list-none">
                <li>
                  <span className="text-blue-600 dark:text-blue-400 font-bold">A)</span>{' '}
                  <Editable id="tools.stc.clause37.a" type="textarea" defaultContent="In respect of all claims other than those subject to the provisions of sub-clause (C) below, whichever is the least of:">
                    <span>In respect of all claims other than those subject to the provisions of sub-clause (C) below, whichever is the least of:</span>
                  </Editable>
                  <ul className="space-y-1.5 pl-6 mt-1 list-none">
                    <li>
                      <span className="text-slate-805 dark:text-slate-300 font-semibold">I.</span>{' '}
                      <Editable id="tools.stc.clause37.a.i" defaultContent="The value of the Goods, or">
                        <span>The value of the Goods, or</span>
                      </Editable>
                    </li>
                    <li>
                      <span className="text-slate-805 dark:text-slate-300 font-semibold">II.</span>{' '}
                      <Editable id="tools.stc.clause37.a.ii" defaultContent="2 SDR per gross kilogram of, the lost, damaged, misdirected, mis-delivered or in respect of which a claim arises.">
                        <span>2 SDR per gross kilogram of, the lost, damaged, misdirected, mis-delivered or in respect of which a claim arises.</span>
                      </Editable>
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="text-blue-600 dark:text-blue-400 font-bold">B)</span>{' '}
                  <Editable id="tools.stc.clause37.b" type="textarea" defaultContent="The SDR shall be as defined by the International Monetary Fund and the value of a SDR shall be calculated at the date when settlement is agreed or judgement.">
                    <span>The SDR shall be as defined by the International Monetary Fund and the value of a SDR shall be calculated at the date when settlement is agreed or judgement.</span>
                  </Editable>
                </li>
                <li>
                  <span className="text-blue-600 dark:text-blue-400 font-bold">C)</span>{' '}
                  <Editable id="tools.stc.clause37.c" type="textarea" defaultContent="In respect of claims for delay where not excluded by the provisions of these Conditions, the amount of the Company's charges in respect of the Goods delayed.">
                    <span>In respect of claims for delay where not excluded by the provisions of these Conditions, the amount of the Company's charges in respect of the Goods delayed.</span>
                  </Editable>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
              <Editable id="tools.stc.clause38.title" defaultContent="38. Air Carriage Notice">
                <h4 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-3">38. Air Carriage Notice</h4>
              </Editable>
              <Editable id="tools.stc.clause38.content" type="textarea" defaultContent="If the Company acts as a principal in respect of carriage of Goods by air, the following notice is hereby given: If the carriage involves an ultimate destination or stop in a country other than the country of departure, the Warsaw Convention or its amendments for the time being may be applicable and the Conventions governs and in most cases limits the liability of carriers in respect of loss of or damage to cargo. Agreed stopping places are those places (other than the places of departure and destination) shown under requested routing and/or those places shown in carrier's timetables as scheduled stopping places for the route. The address of the first carrier is the airport of departure.">
                <p className="text-slate-705 dark:text-slate-300 pl-4">
                  If the Company acts as a principal in respect of carriage of Goods by air, the following notice is hereby given: If the carriage involves an ultimate destination or stop in a country other than the country of departure, the Warsaw Convention or its amendments for the time being may be applicable and the Conventions governs and in most cases limits the liability of carriers in respect of loss of or damage to cargo. Agreed stopping places are those places (other than the places of departure and destination) shown under requested routing and/or those places shown in carrier's timetables as scheduled stopping places for the route. The address of the first carrier is the airport of departure.
                </p>
              </Editable>
            </div>

            <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
              <Editable id="tools.stc.clause39.title" defaultContent="39. Electronic Data Interchange (EDI) Validation">
                <h4 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-3">39. Electronic Data Interchange (EDI) Validation</h4>
              </Editable>
              <Editable id="tools.stc.clause39.content" type="textarea" defaultContent="The Company shall facilitate the provision of services by the Company to its customers through the use of EDI by electronically sending and receiving data agreed in substitution for conventional paper-based documents as validated by the Electronic Transactions Act No: 19 of 2006 and all messages between the Company and its customers using such EDI method would be subject to these Standard Trading Conditions.">
                <p className="text-slate-705 dark:text-slate-300 pl-4">
                  The Company shall facilitate the provision of services by the Company to its customers through the use of EDI by electronically sending and receiving data agreed in substitution for conventional paper-based documents as validated by the Electronic Transactions Act No: 19 of 2006 and all messages between the Company and its customers using such EDI method would be subject to these Standard Trading Conditions.
                </p>
              </Editable>
            </div>

            <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
              <Editable id="tools.stc.clause40.title" defaultContent="40. EDI Mutual Undertakings">
                <h4 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-3">40. EDI Mutual Undertakings</h4>
              </Editable>
              <Editable id="tools.stc.clause40.intro" type="textarea" defaultContent="The Company and the Customer agree that each of them shall:">
                <p className="text-slate-805 dark:text-slate-300 font-medium pl-4 mb-2">The Company and the Customer agree that each of them shall:</p>
              </Editable>
              <ul className="space-y-3.5 pl-8 list-none">
                <li>
                  <span className="text-blue-600 dark:text-blue-400 font-bold">A).</span>{' '}
                  <Editable id="tools.stc.clause40.a" type="textarea" defaultContent="At its own expense, test and maintain its equipment, software and services necessary to effectively and reliably transmit and receive messages.">
                    <span>At its own expense, test and maintain its equipment, software and services necessary to effectively and reliably transmit and receive messages.</span>
                  </Editable>
                </li>
                <li>
                  <span className="text-blue-600 dark:text-blue-400 font-bold">B).</span>{' '}
                  <Editable id="tools.stc.clause40.b" type="textarea" defaultContent="Ensure that no changes are made to the systems operations which impair the mutual capabilities of the parties to communicate as contemplated by the EDI method without providing reasonable prior notice of the intended change.">
                    <span>Ensure that no changes are made to the systems operations which impair the mutual capabilities of the parties to communicate as contemplated by the EDI method without providing reasonable prior notice of the intended change.</span>
                  </Editable>
                </li>
                <li>
                  <span className="text-blue-600 dark:text-blue-400 font-bold">C).</span>{' '}
                  <Editable id="tools.stc.clause40.c" type="textarea" defaultContent="Implement and maintain security procedures to protect messages and their records against misuse, improper or unauthorized access, alteration or loss.">
                    <span>Implement and maintain security procedures to protect messages and their records against misuse, improper or unauthorized access, alteration or loss.</span>
                  </Editable>
                </li>
                <li>
                  <span className="text-blue-600 dark:text-blue-400 font-bold">D).</span>{' '}
                  <Editable id="tools.stc.clause40.d" type="textarea" defaultContent="Ensure that intermediaries employed to retransmit messages are instructed not to make unauthorized change in the data content and that the data content of such messages is not disclosed to any unauthorized person.">
                    <span>Ensure that intermediaries employed to retransmit messages are instructed not to make unauthorized change in the data content and that the data content of such messages is not disclosed to any unauthorized person.</span>
                  </Editable>
                </li>
                <li>
                  <span className="text-blue-600 dark:text-blue-400 font-bold">E).</span>{' '}
                  <Editable id="tools.stc.clause40.e" type="textarea" defaultContent="Not consider any information contained in any EDI message communicated, as confidential unless by operation of law or by designation in the message in which event the parties shall apply special protection (such as encryption) or other means to the messages transmitted.">
                    <span>Not consider any information contained in any EDI message communicated, as confidential unless by operation of law or by designation in the message in which event the parties shall apply special protection (such as encryption) or other means to the messages transmitted.</span>
                  </Editable>
                </li>
                <li>
                  <span className="text-blue-600 dark:text-blue-400 font-bold">F).</span>{' '}
                  <Editable id="tools.stc.clause40.f" type="textarea" defaultContent="Provide proper identification of the sender and recipient of EDI messages as a means of verifying the formal completeness and authenticity of the message.">
                    <span>Provide proper identification of the sender and recipient of EDI messages as a means of verifying the formal completeness and authenticity of the message.</span>
                  </Editable>
                </li>
                <li>
                  <span className="text-blue-600 dark:text-blue-400 font-bold">G).</span>{' '}
                  <Editable id="tools.stc.clause40.g" type="textarea" defaultContent="Accept the integrity of all messages and agree to accord the same status as would be applicable to information sent via paper documents.">
                    <span>Accept the integrity of all messages and agree to accord the same status as would be applicable to information sent via paper documents.</span>
                  </Editable>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
              <Editable id="tools.stc.clause41.title" defaultContent="41. Corrupted or Garbled Messages">
                <h4 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-3">41. Corrupted or Garbled Messages</h4>
              </Editable>
              <Editable id="tools.stc.clause41.content" type="textarea" defaultContent="Where there is proof that a message has been or is likely to have been corrupted, garbled, incomplete, incorrect or not in good order, it shall not be accepted by the recipient.">
                <p className="text-slate-705 dark:text-slate-300 pl-4">
                  Where there is proof that a message has been or is likely to have been corrupted, garbled, incomplete, incorrect or not in good order, it shall not be accepted by the recipient.
                </p>
              </Editable>
            </div>

            <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
              <Editable id="tools.stc.clause42.title" defaultContent="42. Creation of Obligations">
                <h4 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-3">42. Creation of Obligations</h4>
              </Editable>
              <Editable id="tools.stc.clause42.content" type="textarea" defaultContent="The parties agree that valid and enforceable obligations may be created by the communication of messages in compliance of EDI in terms of the Electronic Transactions Act No: 19 of 2006.">
                <p className="text-slate-705 dark:text-slate-300 pl-4">
                  The parties agree that valid and enforceable obligations may be created by the communication of messages in compliance of EDI in terms of the Electronic Transactions Act No: 19 of 2006.
                </p>
              </Editable>
            </div>

            <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
              <Editable id="tools.stc.clause43.title" defaultContent="43. Force Majeure and System Failures">
                <h4 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-3">43. Force Majeure and System Failures</h4>
              </Editable>
              <Editable id="tools.stc.clause43.content" type="textarea" defaultContent="The Company would not be responsible or liable in breach by reason of any delay in performance or non performance of its obligations if such delay in performance or non performance is caused by an Act of God or by any other cause beyond human control including but not limited to any mechanical, electronic or communication failure.">
                <p className="text-slate-705 dark:text-slate-300 pl-4">
                  The Company would not be responsible or liable in breach by reason of any delay in performance or non performance of its obligations if such delay in performance or non performance is caused by an Act of God or by any other cause beyond human control including but not limited to any mechanical, electronic or communication failure.
                </p>
              </Editable>
            </div>

            <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
              <Editable id="tools.stc.clause44.title" defaultContent="44. Admissibility of Data Log">
                <h4 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-3">44. Admissibility of Data Log</h4>
              </Editable>
              <Editable id="tools.stc.clause44.content" type="textarea" defaultContent="Without regard to the absence of any writing and written signatures as permitted by law, the records of messages maintained by the parties (including the Data Log) shall be admissible and may be used as evidence of the information contained therein. The parties agree not to contest the admissibility of the Data Log as evidence in any legal, administrative, judicial or other proceedings.">
                <p className="text-slate-705 dark:text-slate-300 pl-4">
                  Without regard to the absence of any writing and written signatures as permitted by law, the records of messages maintained by the parties (including the Data Log) shall be admissible and may be used as evidence of the information contained therein. The parties agree not to contest the admissibility of the Data Log as evidence in any legal, administrative, judicial or other proceedings.
                </p>
              </Editable>
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-6">
          <Editable id="tools.stc.misc.title" defaultContent="Miscellaneous and Jurisdiction">
            <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mt-12 mb-4 border-b border-blue-100 dark:border-blue-900/40 pb-2">
              Miscellaneous and Jurisdiction
            </h3>
          </Editable>

          <div className="space-y-6">
            <div>
              <Editable id="tools.stc.clause45.title" defaultContent="45. Service of Notices">
                <h4 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-3">45. Service of Notices</h4>
              </Editable>
              <Editable id="tools.stc.clause45.content" type="textarea" defaultContent="Any notice served by post shall be deemed to have been given on the third day following the day on which it was posted to the address of the recipient of such notice last known to the Company.">
                <p className="text-slate-705 dark:text-slate-300 pl-4">
                  Any notice served by post shall be deemed to have been given on the third day following the day on which it was posted to the address of the recipient of such notice last known to the Company.
                </p>
              </Editable>
            </div>

            <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
              <Editable id="tools.stc.clause46.title" defaultContent="46. Service of Notices">
                <h4 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-3">46. Applicability of Defenses</h4>
              </Editable>
              <Editable id="tools.stc.clause46.content" type="textarea" defaultContent="The defenses and limits of liability provided for by these Conditions shall apply in any action against the Company whether such action be founded in contract or tort.">
                <p className="text-slate-705 dark:text-slate-300 pl-4">
                  The defenses and limits of liability provided for by these Conditions shall apply in any action against the Company whether such action be founded in contract or tort.
                </p>
              </Editable>
            </div>

            <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
              <Editable id="tools.stc.clause47.title" defaultContent="47. Headings">
                <h4 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-3">47. Headings</h4>
              </Editable>
              <Editable id="tools.stc.clause47.content" type="textarea" defaultContent="Headings of clauses or groups of clauses in these conditions are for indicative purposes only.">
                <p className="text-slate-705 dark:text-slate-300 pl-4">
                  Headings of clauses or groups of clauses in these conditions are for indicative purposes only.
                </p>
              </Editable>
            </div>

            <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
              <Editable id="tools.stc.clause48.title" defaultContent="48. Severability">
                <h4 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-3">48. Severability</h4>
              </Editable>
              <Editable id="tools.stc.clause48.content" type="textarea" defaultContent="Should any clause, or part of a clause, be found to be void or unenforceable, the remainder of that clause or section of the contract shall remain unaffected.">
                <p className="text-slate-705 dark:text-slate-300 pl-4">
                  Should any clause, or part of a clause, be found to be void or unenforceable, the remainder of that clause or section of the contract shall remain unaffected.
                </p>
              </Editable>
            </div>

            <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
              <Editable id="tools.stc.clause49.title" defaultContent="49. Jurisdiction and Law">
                <h4 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-3">49. Jurisdiction and Law</h4>
              </Editable>
              <Editable id="tools.stc.clause49.content" type="textarea" defaultContent="These conditions and any claim or dispute arising out of or in connection with the services of the Company shall be subject to Sri Lankan Law and the exclusive jurisdiction of the Courts of Sri Lanka.">
                <p className="text-slate-805 dark:text-slate-300 font-medium pl-4">
                  These conditions and any claim or dispute arising out of or in connection with the services of the Company shall be subject to Sri Lankan Law and the exclusive jurisdiction of the Courts of Sri Lanka.
                </p>
              </Editable>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
