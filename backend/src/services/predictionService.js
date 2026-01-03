const predictEmergencySurge = (admissions) => {
  if (admissions.length < 3) return "INSUFFICIENT_DATA";

  const last3 = admissions.slice(-3);
  const avg = last3.reduce((sum, d) => sum + d.emergency_cases, 0) / 3;

  if (avg > 100) return "HIGH";
  if (avg > 60) return "MEDIUM";
  return "LOW";
};

const predictICUShortage = (admissions, hospital) => {
  const latest = admissions[admissions.length - 1];
  if (!latest) return "INSUFFICIENT_DATA";

  const icuUsage = (latest.icu_admissions / hospital.icu_beds) * 100;

  if (icuUsage > 85) return "CRITICAL";
  if (icuUsage > 65) return "WARNING";
  return "STABLE";
};

const predictStaffBurnout = (workload) => {
  if (!workload.length) return "INSUFFICIENT_DATA";

  const latest = workload[workload.length - 1];

  const ratio =
    latest.patients_handled / (latest.doctors_on_duty + latest.nurses_on_duty);

  if (ratio > 15 || latest.overtime_hours > 6) return "HIGH";
  if (ratio > 10) return "MEDIUM";
  return "LOW";
};

module.exports = {
  predictEmergencySurge,
  predictICUShortage,
  predictStaffBurnout,
};
