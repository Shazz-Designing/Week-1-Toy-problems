function calculateNetSalary(basicSalary, benefits) {
    // Define tax rates
    const taxRates = [
      { minMonthly: 0, maxMonthly: 24000, rate: 0.1 },
      { minMonthly: 24001, maxMonthly: 32333, rate: 0.25 },
      { minMonthly: 32334, maxMonthly: 500000, rate: 0.3 },
      { minMonthly: 500001, maxMonthly: 800000, rate: 0.325 },
      { minMonthly: 800001, maxMonthly: Infinity, rate: 0.35 },
    ];
  
    // Calculate annual taxable pay
    const annualTaxablePay = (basicSalary + benefits) * 12;
  
    // Calculate PAYE
    let paye = 0;
    for (const rate of taxRates) {
      if (annualTaxablePay > rate.minMonthly * 12) {
        const taxableAmount = Math.min(
          (annualTaxablePay - rate.minMonthly * 12),
          (rate.maxMonthly - rate.minMonthly) * 12
        );
        paye += taxableAmount * rate.rate;
      } else {
        break; // No need to continue, already in the highest tax bracket
      }
    }
  
    // Calculate NHIF (assuming gross pay includes benefits)
    let nhif = 0;
    if (annualTaxablePay <= 5999 * 12) {
      nhif = 150;
    } else {
      const nhifRates = [
        { minGrossPay: 6000 * 12, deduction: 300 },
        { minGrossPay: 8000 * 12, deduction: 400 },
        { minGrossPay: 12000 * 12, deduction: 500 },
        { minGrossPay: 15000 * 12, deduction: 600 },
        { minGrossPay: 20000 * 12, deduction: 750 },
        { minGrossPay: 25000 * 12, deduction: 850 },
        { minGrossPay: 30000 * 12, deduction: 900 },
        { minGrossPay: 35000 * 12, deduction: 950 },
        { minGrossPay: 40000 * 12, deduction: 1000 },
        { minGrossPay: 45000 * 12, deduction: 1100 },
        { minGrossPay: 50000 * 12, deduction: 1200 },
        { minGrossPay: 60000 * 12, deduction: 1300 },
        { minGrossPay: 70000 * 12, deduction: 1400 },
        { minGrossPay: 80000 * 12, deduction: 1500 },
        { minGrossPay: 90000 * 12, deduction: 1600 },
        { minGrossPay: 100000 * 12, deduction: 1700 },
      ];
  
      for (const rate of nhifRates) {
        if (annualTaxablePay >= rate.minGrossPay) {
          nhif = rate.deduction;
        } else {
          break;
        }
      }
    }
  
    // Calculate NSSF (assuming gross pay includes benefits)
    const nssfRate = 0.06; // 6% contribution from both employee and employer
    const nssfLimitTier1 = 6000 * 12;
    const nssfLimitTier2 = 18000 * 12;
    let nssf = 0;
    if (annualTaxablePay <= nssfLimitTier1) {
      nssf = annualTaxablePay * nssfRate;
    } else if (annualTaxablePay > nssfLimitTier1 && annualTaxablePay <= nssfLimitTier2) {
      nssf = nssfLimitTier1 * nssfRate + (annualTaxablePay - nssfLimitTier1) * nssfRate;
    } else {
      nssf = (nssfLimitTier1 + nssfLimitTier2) * nssfRate;
    }
  
    // Calculate gross salary
    const grossSalary = basicSalary + benefits;
  
    // Calculate net salary
    const netSalary = grossSalary - (paye + nhif + nssf);
  
    return {
      basicSalary,
      benefits,
      annualTaxablePay,
      paye,
      nhif,
      nssf,
      grossSalary,
      netSalary,
    };
  }
  
  // Example usage:
  const basicSalary = 40000;
  const benefits = 10000;
  const salaryDetails = calculateNetSalary(basicSalary, benefits);
  console.log(salaryDetails);
  