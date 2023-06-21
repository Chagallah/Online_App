USE [GHospital]
GO

create procedure Insert_PhysicalExamination
			(@patient_id varchar(50)
           ,@temperature varchar(50)
           ,@mode_of_measurement int
           ,@rate int
           ,@saturation int
           ,@mode_of_supply int
           ,@icu_hdu int
           ,@mechanical_ventilation int
           ,@createdby char(50)
           ,@datecreated datetime)
		   as
INSERT INTO [dbo].[PhysicalExamination]
           ([patient_id]
           ,[temperature]
           ,[mode_of_measurement]
           ,[rate]
           ,[saturation]
           ,[mode_of_supply]
           ,[icu_hdu]
           ,[mechanical_ventilation]
           ,[createdby]
           ,[datecreated])
     VALUES
           (@patient_id 
           ,@temperature 
           ,@mode_of_measurement 
           ,@rate 
           ,@saturation 
           ,@mode_of_supply 
           ,@icu_hdu 
           ,@mechanical_ventilation 
           ,@createdby 
           ,@datecreated )
GO


