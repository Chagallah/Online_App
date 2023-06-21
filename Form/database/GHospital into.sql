USE [GHospital]
GO

create procedure Insert_Demographic
			@patient_id varchar(50)
           ,@admission_date date
           ,@hospital_name char(1)
           ,@age_months int
           ,@age_years int
           ,@sex int
           ,@county_residence char(1)
           ,@village char(1)
           ,@onset_date date
           ,@out_patient_date date
           ,@createdby char(20)
           ,@datecreated datetime
		   as
		   begin
INSERT INTO [dbo].[Demographic]
           ([patient_id]
           ,[admission_date]
           ,[hospital_name]
           ,[age_months]
           ,[age_years]
           ,[sex]
           ,[county_residence]
           ,[village]
           ,[onset_date]
           ,[out_patient_date]
           ,[createdby]
           ,[datecreated])
     VALUES
           (@patient_id
           ,@admission_date
           ,@hospital_name
           ,@age_months
           ,@age_years
           ,@sex
           ,@county_residence
           ,@village
           ,@onset_date
           ,@out_patient_date
           ,@createdby
           ,@datecreated)
		   end
GO


