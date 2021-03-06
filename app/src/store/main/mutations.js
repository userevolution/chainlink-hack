export function setWallet(state, wallet) {
  try {
    // Object.assign fails if signer is undefined
    Object.assign(state.signer, wallet.signer);
    Object.assign(state.provider, wallet.provider);
    state.userAddress = '0'; // not reactive without this from initial undefined state
    state.userAddress = wallet.userAddress;
  } catch {
    state.signer = wallet.signer;
    state.provider = wallet.provider;
    state.userAddress = '0';
    state.userAddress = wallet.userAddress;
  }
}

export function setContracts(state, contracts) {
  try {
    Object.assign(state.contracts, contracts);
  } catch {
    state.contracts = contracts;
  }
}

export function setProxyData(state, proxyData) {
  state.proxy.address = proxyData.address;
  state.proxy.ethBalance = proxyData.ethBalance;
  state.proxy.bntBalance = proxyData.bntBalance;
  state.proxy.ethBntBalance = proxyData.ethBntBalance;
  state.proxy.ethTokenBalance = proxyData.ethTokenBalance;
  state.proxy.ticketNumber = proxyData.ticketNumber;
}

export function setProxyAddress(state, address) {
  state.proxy.address = address;
}

export function setGasPrice(state, gasPrice) {
  state.gasPrice = gasPrice;
}

export function setResults(state, results) {
  state.results = results;
}

export function setMagayoInfo(state, info) {
  state.proxy.magayoInfo = info;
}

export function setLotteryData(state, lotteryData) {
  state.lottery.startTime = lotteryData.startTime;
  state.lottery.duration = lotteryData.duration;
  state.lottery.drawNo = lotteryData.drawNo;
  state.lottery.selectedDrawNo = lotteryData.selectedDrawNo;
  state.lottery.options = lotteryData.options;
  state.lottery.drawState = lotteryData.drawState;
  state.lottery.entries = lotteryData.entries;
  state.lottery.results = lotteryData.results;
  state.lottery.drawRewards = lotteryData.drawRewards;
  state.lottery.drawNumbers = lotteryData.drawNumbers;
}

export function setSelectedDrawNo(state, drawNo) {
  state.lottery.selectedDrawNo = drawNo;
}

export function setCountdown(state, countdown) {
  state.lottery.countdown = countdown;
}
