//day 1 function formats a string broken up by line and double lines into an array with subarrays. Proceed to return the last 3 max values of sum of calories.
function hungryElfWithMostCalories(input) {
	let arrOfElves = input.split('\n\n')
	let newArrOfElves = arrOfElves.map(value => value.split('\n'))

	let maxCalories = []
	for (let i = 0; i < newArrOfElves.length; i++) {
		let total = newArrOfElves[i].reduce((total, value) => +total + +value, 0)
		maxCalories.push(total)
	}
	return maxCalories.sort((a, b) => b - a).slice(0, 3).reduce((total, value) => total + value, 0)
}

// day 2 formats a string of secret code and converts it into numbers designated for rock, paper, scissors. Calculates final score as defined by secret instructions.
function rockPaperScissors(input) {
    let scoreArr = input.split('\n').map(value => {
      let rounds = value.split(' ')
          return rounds.map(
          value => value === 'A' || value === 'X' ? 1 : 
          value === 'B' || value === 'Y' ? 2 : 3)
    })
  
  
    scoreArr = scoreArr.map(round => {
          // draw
      if (round[1] === 2) return 3 + round[0]
          // lose
        if (round[1] === 1 && round[0] === 1) return 3
          if (round[1] === 1 && round[0] === 2) return 1
          if (round[1] === 1 && round[0] === 3) return 2
          // win
          if (round[1] === 3 && round[0] === 1) return 6 + 2
          if (round[1] === 3 && round[0] === 2) return 6 + 3
          if (round[1] === 3 && round[0] === 3) return 6 + 1
    })
  
    return scoreArr.reduce((total, value) => total + value, 0)
  }

  //
  // function ruckSack(inp) {
  //   const priority = ' abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  //   // 1-26 and 27-52
  //   let items = inp
  //     .split('\n')
  //     .map(
  //       (value) =>
  //         `${[value.slice(0, value.length / 2)]},${[
  //           value.slice(value.length / 2),
  //         ]}`
  //     )
  //     .map((value) => value.split(','));
  
  //   let shared = [];
    
  //   items.map((value) => {
  //     let ruck1 = value[0].split('');
  //     let ruck2 = value[1].split('');
  //     shared.push(ruck1.find((letter) => ruck2.includes(letter)));
  //   });
  //   shared = shared.filter(value => value !== undefined)
  //   console.log(shared);
  //   return shared.reduce((total, value) => total + priority.indexOf(value), 0);
  // }
  const ruckSack = (str) => {
    let values = [];
    const letters = ' abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  
    for (const line of str.split('\n')) {
      const first = line.slice(0, line.length / 2);
      const second = line.slice(line.length / 2);
  
      const firstSet = new Set(first.split(''));
      const secondSet = new Set(second.split(''));
  
      for (const char of firstSet)
        if (secondSet.has(char)) {
          values.push(char);
          break;
        }
    }
    console.log(values);
    values = values.map((item) => letters.indexOf(item));
  
    return values.reduce((sum, num) => sum + num);
  }; 
  

  console.log(ruckSack(`BdbzzddChsWrRFbzBrszbhWMLNJHLLLLHZtSLglFNZHLJH
  nnfMwqpQTMffHlNNLllHnZSS
  cGpcMwfppfqcjcTCBBzWDsDbDrjzWz
  LhfjhcdjcGdhFfdGfdjdvwCCZMvvLvWwMLCLSwZC
  rDnsbmptPmlbQMCrQWQQBZQW
  gltgVPngDPbptPsbPzVgmDldfTdfczThjJJjfMcJdFHjjH
  dGlgDflTLLLrRLTLVdQLcQMnbvHbbFzNNvMbnHHn
  sZjWJJCSjWqfCqSjSmJSbFvCzBMBBzHncHNvMBHN
  twqqwpZwfrlwRwDGDR
  zCGGFTQMQrsNRNGZdR
  cLLQgPDpgcgmvPRHrwBdvrNZ
  glWpmJWQDcJpQnpjSmbhFtMnqFfCVTCFCFFM
  zNZWFNZBFrGTdBcZZBdJTrGrmgvppgDHwHmgVHCHCvCPDjzC
  qtqqPnLSfLwvjvvgvvqH
  MtbLLLQbRfPRfnbnnLMtnsbdBNsrGWNWcNcTBWZrrcrWcJ
  sZwstbbDVlHtbhcrhhZLrRpNQN
  jqGjjFjWnzWGgqWjJJNphnLMRhLhcrhcrSLN
  qCJzFJdvmHvbtpbb
  ZSRsvvQvZpsRQGJghClPCwGPChCP
  FVdMLDdtDRdDcBtmcVFntwgJJTlnNPwJnlTlwlTPgN
  VqttMWFmDbjbzrSWRQ
  TsDSBcwshdwSCrgRWZBvgGRG
  LPVJLqqJbbzpFqwpbvgGRmZPrmZgCvCCfr
  tzJlJzQllFLqtwHhjNSdtthjDhTN
  fsDLDDnwvnSdqLSsFSDfsLpbgVttPMpPNjMWVMNfpjgW
  jhHmBmlrTBBHRPVtMZbppNPPZB
  JmTTrTmjRTJqSQQSFqQw
  HPzZFgPFMCHJCcZMcDQGwpLqPLqppwhGvv
  BrWRqbqRsTSTqNddrVrthLQVwnpwphnvnDnGvGDn
  tSbBfsRbTfqjJqjCqm
  pCqrqzmqZzrmCCvCJwJPBRwJBWBmwWBJ
  VqbqbjFLFfSHnfctBwDdDFTwtRRTDF
  LVcnbjHLSqHnhbSGGppCMMZMphpNrQ
  PhTcTPsSPCMvvhhMRPttbNWfNsWFNfWWtpNw
  rdQrDbJBVVjrBVdLjHHHWNWwfHtzzNtFpZZptppg
  JJVGGdddjDjDJmdjGqqRSbPMTvcRlqnnMlvT
  SqGfTrBlSrrrfGGQvCnqZhZmPPhvJh
  LdVNwgsjdjHmjWwDsDpwsHWtnCnQQQQNnvCnbJZQbNbtZZ
  DjssDHLLVppDssdLspswFLVjzfFMTfSBcTRcrFSBzBTzmGzr
  JSJJqlldpJlcdVWMlgMJrcCjrhzHCwTjHrQzwTzZ
  bBvsGBGNFDNRFNFBRDPsDDHCChhhrZRQQzhjhCjTzWCr
  FvbLFGDDtWDFBnPGFDWGqJMgJpSdVStllttlppVS
  clpBdBQBsqGpQbVdqTTWRTSFgLLggffg
  NzvwmHvZtZZgbDSCLDmfmm
  jPJjthHzNwPvvjwjNzPzztZBlrccpbVGBQhlGBVlrpnpBs
  NmFFGlGmzCrNWHvFmFWCFvQPTdDDlbbdgJPtgbbdPDcc
  RwfBqLwZqffqnPbdDgVQDdtRbT
  hnptqLMMLwqjMMjzSzHmhvNNrvvhhz
  hqVrDdPdVDqjsDrjjqsfrrWlctvHJNLfvNcLHNNZRNZHvfZL
  CSnWQSGBBSnmBnTmSbQbNZZMJNJMccGNHLZNNvNv
  gFnmBmBnTCpwmBbgWVqjPsrsjplVrjlqPr
  vgVgJJCphzFjzbwljwww
  PWmfDgrPrPWlSWqSWlSZ
  rrTHQTGTPHDDHgPrcrcPmDPhdtGvnvNnttJCdJhtGVnpdM
  DDDhNgWNLWgDqDgtgtwSngjVSQdf
  cvFrcGmBrrrCdSfSJQ
  mBHzFFvFzmsBspsFsZqhqbWlWdPDlLHbqZ
  TLNpGpRzwGQLLQRTwdvWdWbdbgdBlblb
  FJDVzZzHfZHVzcHgnvHnvngvvc
  MzDVSmZPPrqhGmCqQqLR
  mqHWcBHVcgsbhhnTrrTg
  fWftGtfJpwJMSdFDLFSGDGFnnNrbrhTNsZnrhTswZZnnsb
  dSftppdSFStLDpQfLjWHQvWBmmqVjCqcVv
  frfNzgvzzzJwJqpRcP
  VdVSnGnHqhDDTdqhdLWmjMTmjMPjPmTsmsmjmR
  BdGLSWtBSWDtVqdSDVGqtSSHFZFZtQbZlZfNgFffrgNrvgrl
  jBVSjsJcLcqqjtgcmRFRNFFzFm
  CnHnWQQGGWnnCnfvCTmZRZgNtfZtNDZPtNDtzl
  mWWGGdmQQWwrHHMBBBhrBVqshBLBSL
  cLtFcllvrslGLcLHVzDZQzzpznWzQtQZ
  TmShfSSPJRRBBfSgmdfBJhDNVpGzVZpzQgZgbWzpnDGp
  BhJPfSqdhqJRdBdPqTJBChvrFlHvvCGCccHsMscvrHvv
  zfddZTpZLzLDfLtDCttdTfZPnlcPcnhjPDnlcjMchDPjnP
  MQsFvFHJsQvmNvvswljgbPbwlwjnmcch
  VFVqvqFQHqVJRVCBLpqTGMzCqtMZ
  PZdVgNdQQcdcZQtGhnHtBlvlvWTnbBHWWH
  CDJmzqFmMmLfqmzFwqfzfwMRvpRbTWBBWDnlnbnWnTNTnB
  zFfffjCqwLJCfrCFjCLCzCMsjSZjQNPhQGVSQQZhsGjGgd
  nbHntnqPQwTHwQVC
  BzfSZSpcBZpzpPhSBjRTCBWTTRWTTTWR
  pvZpzPzNfhddJGmmNnJb
  GwTgWlvbgTwMrbwTrlWvwtHBNtNvBhBtdZcShHDtNS
  PnndmnCmnJFnsmRdmFnnZDhRRScRQQHDtDNtcDQS
  CLffLsmqqpJljVdlpMpWlr
  dPCzBLTSLqmqdSCsmrTDVQjZfjfVVZnZhhhLGQ
  wwFpgvPJNwgPPwvZGnQhbZQQFfQZbf
  WvRwwJpHHgpNMNqdTdCdqrmHBPtm
  DbWwjSGFSFfwGfCwDSSPPjLhgrrLWRJRgggJphLzpJLq
  lQTnMHdcQBvlHMMZBcHHTrbzpdzgqrpLdqzzVRVRVV
  vlvlNlBQvBZTQBnHnQTTBBPwPNCCsfSFmbSFfmGPwFmj
  hGGQtbVjhRqlmqqrmDlpmw
  gPMZsMgdssCPPsvrgZcTZTPSnnLLnBWDwLmwWwBnmWSnWNWB
  TsvgMPdcgCfMdcsZJRQhVfVRVQFFQGtr
  NfpFTTpFNbpZMRFrJMMMCv
  dWJPngDWBtPVBdPVGHZzCGHZrrvZRSMSzv
  WDDDVDPlWnLBVgnsgJmQJNqThNmbjlqbbh
  vnznqvfrzzVzrvvnfVqztBtGbMCdGmCcdccJccCLCcpSSgcL
  RQsDsljDlhssWshHhlhsHTlLbgJLpmgbbcMSpSSbcSJgjd
  WswhhHWlRTsQDwWHTRhsvNVvwqzfVmNBtZNmnzzq
  cjcPfLlQtPsZQlfHZJqVSFdVwmSRRqSSddwDvF
  MgNbBgzgnwdPRFmSPn
  CMGbNNMhCMzzPzBpTNPGBclLcLfsptHQfQlZssLcLf
  slsdfpSlllpTVJJGgGDgHMdV
  wrBQrbQrhQcpbQrhLwRBrjVVgGGPgZMtZMVhgMPMGHPg
  QQwRnrwRbbRcmQmrjRnjpvNsNTNSlTmsTqCSvsNSWz
  GWNwppdHdpmzgPFPCRmlCBPB
  bSrJhJSsMhrJMDPRCPBlwVCtVSLV
  QbsbwqQZvrJhhQrhZZrhchTfnTWGNvWpNnjHGvGjNdGT
  NMZGmnMBWmwmNnGwHrHvHzfrvrVVVj
  pSbDRLgbpJDPpRZRQjjFqVhhDFjDVqfrzv
  sQQscLTZcsTpRsBnmlBcdCMBMtlc
  hwWslbGWbRvLZvcscZ
  gQnmmrNTmSnTfgwDwVwpJvJPJzLqLJTLLvRcZz
  mrmnSrDNNQSmmwdggrrDbHMGhtdtGhGlhtClMGhM
  qQdlGcvDQDQvDdmtPmmmlStbjSrm
  CpNhzWTCTRznBMvwtTjMrHtSvj
  nWzsfZCsBhNpZLgGdQDddvqd
  ggjTjJWDVVVRTwQcZWvchshWhs
  LmFfLfSmBtCttNLfCFBPFNBvvvhrcQdvsrsdSwdqcwrwSw
  CHttltmlPLMHRTgJQDgRDTMb
  RPJgCdhgPPSzvWDcCfGHDcvf
  HbrrwBspTwWDDnqbZjjD
  rQrFsrsstQMQHJdHQm
  GVwQVGBZBNQwsjdNcMMlgJNPgj
  SWFfSzTCSWFCSpgnJLSjpMdc
  FhTbvrzrMrDCVHsVsHGBtHwv
  FsqjjVzFVWFqRRWBssdpNSBHwJpHHJJdddSN
  lQgmhvbTcgTgfhTQhSCFCGJHSlwNtJdGHG
  vgZPbbfMhbTmchhjRFRnsDRPWVqzWz
  cvwfjjcJjqhctvSpCgCFVhrFCrpC
  mRsQmsMlNNzznWQlRnsMRQlSCpLNbpwSSSrwFLDFLLLgFp
  zznlnGlmRmMlPZnGQzMszMRfccTjcBJjtJtJjqTZtfwBTt
  PtCwCCVqbjNNqqvGssPmHGsHMfPH
  dcddcWFDJJJcLczhWQdcDScZvHZgpGfsvMfSmsggSvvnvM
  TTQmTDhdQQzdRwjBVrRwCwBbBr
  BnBsFHCrcnBrMBPSmMSCmrcFqnZLddLhdhdGLvqLqgqnLJJp
  WfjTlNVDTtjzNWTlVMWNlTwTJphdgpvJLGLdgghZvGLpwddq
  zVjbVblVDlNTlbzTzDjllDTzHmHCsmcMHcSBrCBbrHBcBPSC
  ddlcGQlCjQNGQmPLslZTlmTtfT
  MDzMwSwqpzpDRpWRJwgZhttrZmTPfZmrmtrMZZ
  JSqRBpJzwgDDpqDqvpBRdCjbCjQCFCbHvdGPjdHQ
  bwzPwGLZMsbJMPPLGLMQzbhhQRvWWtVqVhgCVtWWQDqt
  HddrHFnFNpVnVLhnvLRV
  NLdrFjHTBrrdjFSpFmNBmSfZMwZMJJfSffbwzwPbczbJ
  QTWSzTTLwTfwflSNJRdvGlRGcNgJBl
  FnmmqrqbBBgRbHGc
  MFZqrCVCqmZCprspFZmnnMsDfzWzDwSfjSwPQPTLhffwBLwj
  npfgFRTZRRnDZLdgRfRrrjcWzGpWGGGQrjjWpP
  vblVbvSShhVzHWjzzlrPWG
  bVwqvCBtShqBhCCtqhNqCJRTTBDFJJLnJgDRWFBnWg
  nHDNQvgvnNZHDnsGcjfNTrTfVrfL
  SRWFSBRLtSFqjTrVVcsVjTSG
  BdBbRttWBdbdWdbppmZlLmgwHvgQvgLZ
  PQRZlpDDptQSclBMGVBdhVFGBMpf
  nnrsTCWjLJsnsSMShhGJfwffwV
  vjzqsjqgSHbbtvHZ
  DgFmbdSDZbPgLbDDmFwZwgLSfccGcGvnvvngsGGnsGMNWsWs
  HqztHHhHVhHjhRRhJtCVBCfNprMWpcMMJfsvvMsGscpG
  tjVtBVTBtHHqCRqtzQwTPSNdSwPTTbPFDdml
  sbmBmHZbRRRmwBmsSjHzRjmSCNFLNLLQNQhFgtQLzNztlrff
  MpqPPDPVnGqrJpcqqJpMVlgtlLFLChCgChCCQgCtCD
  VdcVVJvdrVWHbwHWBSSBRb
  tPDVBzzNSNdDSQpMQMTQJMMQMN
  LqSWSmbsmfQTTGZMWGCW
  cLjLcbrjqmvfqLbfmqLwDBBzSHPzlwzcdBlnnP
  SbnHrGHSrrhHJBrrScDfcPDMfpPGcGcpDL
  QTpmpmmQWlZsTvVQDMgggFLgFcPf
  zsCNlltCslzlTNsNlShwdJCpSqdHrBhpwr
  JZmFrmLGjFZdDGrrVTvzmPVvRRVzwzzl
  WBnfMDBqMsgDBqpBvzwVlCwRTRRPpvlw
  WfghfttggfSnnqbDftfqSBBDQdHhZFFJrrHFjGJdGjFrjQLj
  rNLRjrlVlrFRJzlsjrVlRFGCmnMtftgCNDDgDmCfqNgPNM
  SpdBpdHbpHWhZqnCdtCGggqCPn
  QHHvvWwWhwVVQRscVzGl
  QffLtMQGMQfDMMwMTJwqWHvH
  nSSFznjFcfjTgVJTJjvT
  RrBpcfSNpRBcFshrCtQrDGLPQb
  GctcMldStGwPPbcLsQTV
  jhnzDgnHnnfPVwHQTTLTds
  gBgzDDhzvqdGGvrtdvtm
  PPwRWVTvRvPVLwRpMlzmbmsbHWjbbs
  dFTFCNfdjzjFjsMF
  SgdffSTrnnqCgdqgcNrfSZqVvVLRDPJZQwJBLPQPtLZwJJ
  HSzDQftHphTBHFhr
  WMmJsMJNLWNPmmsncjMJcjtvwggVvhFFFhjrVwrjrjppvT
  WWPsJJCWCtZZZRGC
  SfFZQDRLgpLlRgQRRRFWTsbhBhgTjbWBjhshgw
  tHVNGjtzzHvMMJJhrWJNrTrPbP
  jvVVvGCGtCmjHtdHzQQfDpSSlDRnFfQFmR
  ZBBPfVVPPrVmrWZJzNdPznbnbSzznP
  gvgpGqFFMgMcGgwLwGpcJNZSTZbdbdzNNSlqbTnn
  ssZLgsMLQvcFpVrhCsmtWHjrrW
  nFvhRnWWzBRPHQqcqqCqmFbd
  SJDJgVprLfDfbJmHmWWHQtJW
  wVsgWVSTgLjfSsVjVBRvRNwwGGRhNZhRMZ
  wTRrRBCTPTBPlgMqgHCqggHLgg
  dmDzpQpBdmWmWzzzDFzjGNMSWLSgLVGGLVNSLgSg
  JbFdmQQJpjpptQbdJJmDmdtnZhZRflTlnTrTlrhBwPPc
  jwSwssQbwbStlhRgtsVstn
  zPzFdFFZccPDgntzVHHgghRz
  vVVdfFmZPDMWZZBmGQbwJJGCLwwMwJCS
  PLLffLFqqNLwSffbnVzzRf
  lsmgTggChrgDtZsZVblMVJMznVnwMBnb
  hDZZTmZvhTgstvwNFdqpWQcqvP
  mmWwpwqtmmHTqHpprRZQPPZLZWSFRFRB
  gzcgscgbfvhRRNZQRRQPvr
  JsjhcshCfJgrrpttTCTplH
  TvNrvNrJfWWvtJLTHhvZZhQQwVGZZhbV
  mFCPmBMPlPsPPBsMFPszbHQJwwHHhbZVQVzjhGHZ
  qmlBsdCSmJBmsBBMnMMTDWDNcLrDprSNcWDNrW
  HSnHCVqTddFHSVqFqdStSQGQwRzQCzCRzGRRGNPQwz
  jhlBpgNvlfZjlfvmpgfgfBrMRRwMMPPLQMZRPMWMMZPQ
  hflfpgjfBfDcpchlpvndbHFDdHqSqNVqNVdn
  QBfhlVNfHSZHfVCVHSQfZfTCctdvdDTRtjDCtTRsjsvj
  brrWWqzFWzwWbswDchhTRtDhjT
  gbrFLnpzqrWPgqpLWrhnHGZlSfLfHfQBGVfHHNVG
  hcFmVScmQBVhtcvfHLfvHSnbHRLn
  lzQqlDqgpWPvJfRnlNJvww
  PjCCCPgDgqGzmMtCQstZmBFs
  GrnrHrmVVFMFhSSbSfhR
  zjTqLtBjjdWdWTLshMZMDbPNRMSSqSPNfD
  dTWjdtwWhjWTBzcnrpcwmQpCwcpw
  BgtVBsgVVJhgGsSGJbghJqbsjLfZmLjmmtfZndNNZFFZNLdm
  MHTlzlwHSvPvzMSPCTMQCNZdjjmnfQjdZfNLjF
  HMDTwPDpzrTzpScBghDbVqRBgRBJsR
  qjCsTmrrnnCmhcFrCjqmThRlbHGvJGvvvbRbbJRcQJRG
  fVBBTfMdSZLNZgPdgglGRdbtbtJRllJWJtWb
  TSZZSpNMPBLgpZLVgppBDFhzDmjrnzhjssFqDhzFnn
  MDtDMWmMQmdzmMMqvlGfRcjzgpcPPjczPl
  sZsHJWNJFJNbWFBhFBnnbVclbVVPglfcRggffGGpjl
  srHWLNZZJdSLSdvDMw
  BFqsPnsZcgnncggccqsqqpDPtDWPpPNTNSNThrWtSj
  dQbfQQJJdwdmFRbJLRJdMrfDWrjpDrrprhDDDDNWWD
  QGwdJmCFJZvGsvvncB
  GRRNSjrffGTSPrNTffSgcJTwWJZbbZvwvwtVwWVJZv
  CMcFsqmBQzMzshsBQBQvLWmJVwZtpJLJwJLvwt
  qBzChnQlzMcRSnnRRjHGGg
  dPPbPWNdTBbDpHPHpNsgzvFlglvHzvSFzCFF
  fntqhGhRMhnnnGGCVMRhCVlSjswFvvjzjSzvQVSgsl
  MMqqJJRCnMhZLCRhtPNrpZPDDWTDTrNBmD
  VjVGNTNlNchVjNGRWrSWWtZtRrzncR
  BTbbbwDmCDLTbDwfHmzZMmRrWtzPrZSZtrrz
  qDLLqvwLBsfBbBdQFQTJhqThVTQJ
  qBqPBGZflhrWznzZZdsnzv
  FmHRcCCsCDwDbjtzdjWbdz
  cTRwCCNHFNmwRgmFTNCFTJqqfqPJsPhPBlsrsfGf
  JTNhhNrCTcWpJJcpWw
  LLdLsfMsdStbtggLbnTpwfWDzpjvnnjzcz
  MqSZsgbMbGFbZtgTSZSFSLhhmHlBQlmrmrPHHCPPZPBr
  GgjjgpGvpJJtjgvPrJttsLjVwCsQsQNLsfLfMVCl
  RddqZqzcZdSWcHdcqQfQLMwVflfNQNMQ
  FncWTRcFlHWFmcFTgPJhGvDgpnnhhGtG
  ZGPFJsPQCbZCCbgz
  nrvrnGWTwwqTBRcpCRRg
  DnGWDldNmSLSMdMQ
  ScDmPPPmjmjjWgtdSmdmCnNqVQVVrNRTZTQTQDHHZGNH
  wbbMhLvMJpRwJQrJGHqQGrQHqr
  wzhspwpppswsMFLmtnzjdcmdPRWPtS
  fPlLTtBlTjDbWcTMJcncWqss
  LdvLrLpCRRQQmvhhVNpwRMWJZcFMZWJwJFFFwZsGcs
  prrRVpvvRVNmRvvzHjHPlzPLSffbbPHS
  bbCbzsQbBzbBFbFzFfJHfVJPfVPtzZttpm
  hwvrjDDwjcDcvdnNvwdnwwDPpNtNMVtPpJpRmVMPfmtVZR
  mmqDWjhcqhwvDDdTsSGGCbQGSBBLTGGl
  wthtwrBQhhSrqJJVLMRPPtJLPF
  vbmbZqfqgsfHmcllmLLJNLJMNFJNNvPGJn
  jHlDscllClCCgbZzhWqBzBQzprWCqS
  DwpDlwDwllhJwbDFNDwFPhDnQnZZzVVnnBrtNznzSSzZrr
  MHPfWRTgWzTQmSTTZt
  GdPjHLRMCfcGvwqDGbFq
  NGdNpDPdNGLppLpwSNFFFDLwnnZbMnrHlHZQcHbcnHQcPcQM
  jBgBsjssgjWJVGhBfhvJVnMlbnZQVrrrlHCcCZrl
  sRBgvRffhhtvtBgvjgttWBJTLmFLLwdwzFdqLDDDqFGdLFTd
  RBzRGRGBgnrPJrRGGWWbDggZTSTVZVFFSVZZdw
  tfmLhjfshNNsqpppfjHdwVdQZbVbQFVVTmSVDV
  jvqtwHqCNLNsNhNfjssLCzGJWcBRJRBCBBBrrWnGrG
  cGDBdNFdNdDStNtGdGQGscDMvZjjZWMvMLjsjjLZjLsJLv
  fbRnRzHVPClfRlbbmfHRlPvZvMLpqjvZJqZMpzMpZjBZ
  gfbfBgCHCPVNhNGgTtFDcF
  ljjvLZvvllFnlLJLJjLWFQrVssFpsGMFpNMGsr
  qbHSqHTcHChqCmTSRqqBVpVdBQsVQQGHdMprWV
  DbtcCqRhhTRmDnPMlLgfgztlZZ
  QtMQzPZcbtGgTtLvtf
  HwcDsdVVDnNSGLhwvffJvfTT
  CSsdSHNmSDHcCqqcrrzQcC
  nDNDfmMnmDJRNfJJdMDRBdwjcTtsSHvBTswTjwLtsCts
  QcbQrZZggGWVVWbZZjStswCSCCttGCwLvC
  ZgZgbzVglVbchVVrVhFWWpnnpNJmJMqDfMJnMRqNDDMD
  WMfNvsjWGjsqFjqTRRQVJztDzVmJHbft
  ZPhplcrLrmzQGzmz
  ZPddLPlcSclhZChndMvgTjjWNGWMGWBj
  nDLjMchghDcljfjffpfsqTmGCTGszGZVVzHV
  wdFJPFrQRwSNbjVQCTGsHZHmHCHs
  BRJJSddvdBrJwrBRNRFRSPRjvclLpWhpglgWpLplltnMgh
  BbVRzMcpbMNMHMTJmWdljdlJjT
  GtsqFnfvGSFqGfQvgnWWZlLlLjZWtWldPmlT
  sSsFqsqsGghwQQmfGRHbbVczbwwBpBpHcw
  BBFCBJCsGJBBgvgsvTlVhgNg
  ZnLdjRQddLRnZrlScHRVTTSHhRvg
  fnnjZLWdrnqdWrrPLddqVqBzGDJJFGCBDfJmbDzFMbmB`))