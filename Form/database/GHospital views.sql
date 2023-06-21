use GHospital 
GO

create view sari as

SELECT [Screening].[patient_id]
      ,[history_of_fever]
      ,[body_temperature]
      ,[coughing]
      ,[onset_of_symptoms]
      ,[interview_type]
      ,[hospital_id]
      ,[interview_date]
	  ,[admission_date]
      ,[hospital_name]
      ,[age_months]
      ,[age_years]
      ,[sex]
      ,[county_residence]
      ,[village]
      ,[onset_date]
      ,[out_patient_date]
	  ,[wheezing]
      ,[sore_throat]
      ,[breathing_difficulty]
      ,[rhinorrhea]
      ,[chest_pain]
      ,[diarrhea]
      ,[vomiting]
      ,[muscle_aches]
      ,[chills]
      ,[lack_of_appetite]
      ,[convulsions]
      ,[cannot_drink_orbreastfeed]
      ,[vomits]
      ,[stridor]
      ,[grunting]
      ,[nasal_flaring]
      ,[chest_in_drawing]
      ,[lethargic]
      ,[unconcious]
	  ,[respiratory_disease]
      ,[neurological_disease]
      ,[newly_tb]
      ,[prior_tb]
      ,[hiv_aids]
      ,[heart_disease]
      ,[malnutrition]
      ,[liver_disease]
      ,[renal_disease]
      ,[diabetes]
      ,[asthma]
      ,[cancer]
      ,[sickle_cell]
      ,[rickets]
	  ,[temperature]
      ,[mode_of_measurement]
      ,[rate]
      ,[saturation]
      ,[mode_of_supply]
      ,[icu_hdu]
      ,[mechanical_ventilation]
	  ,[influenza]
      ,[influenza_verification]
      ,[covid_vaccine]
      ,[doses]
      ,[covid_verification]
      ,[covid_test]
      ,[covid_results]
      ,[patient_specimen]
      ,[swab_collection]
      ,[collection_date]
	  ,[final_outcome]
      ,[other_facility]
      ,[date]
      ,[Screening].[createdby]
      ,[Screening].[datecreated]
  
FROM
    [GHospital].[dbo].[Screening]
    INNER JOIN [GHospital].[dbo].[Demographic] ON [Screening].[patient_id] = [Demographic].[patient_id]
    INNER JOIN [GHospital].[dbo].[SignsSymptoms] ON [Screening].[patient_id] = [SignsSymptoms].[patient_id]
    INNER JOIN [GHospital].[dbo].[RiskFactors] ON [Screening].[patient_id] = [RiskFactors].[patient_id]
    INNER JOIN [GHospital].[dbo].[PhysicalExamination] ON [Screening].[patient_id] = [PhysicalExamination].[patient_id]
    INNER JOIN [GHospital].[dbo].[Vaccination] ON [Screening].[patient_id] = [Vaccination].[patient_id]
    INNER JOIN [GHospital].[dbo].[FinalOutcome] ON [Screening].[patient_id] = [FinalOutcome].[patient_id];